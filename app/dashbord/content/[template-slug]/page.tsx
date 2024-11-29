"use client"
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/outputSection'
import TemplateList, { TEMPLATE } from '../../_components/TemplateList'
import templates from '@/app/(data)/templates'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { chatSession } from '@/utils/AiModal'


interface PROPS{
    params:{
        'template-slug':string
    }
    
}

 function CreateNewContent(props:PROPS){

    const selectedTemplate:TEMPLATE|undefined=templates?.find((item)=>item.slug==props.params['template-slug']);

    const [loading, setLoading]=useState(false);

    const [aiOutput,setAiOutput]=useState<string>('')

    const GenerateAIContent=async(FormData:any)=>{

        setLoading(true);

        const SelectedPrompt=selectedTemplate?.aiPrompt;

        const FinelAIPrompt=JSON.stringify(FormData)+", "+SelectedPrompt;

        const result=await chatSession.sendMessage(FinelAIPrompt);

        console.log(result.response.text());
        setAiOutput(result?.response.text())
        setLoading(false);
    }

  return (
    <div className='p-10'>
        <Link href={"/dashbord"}>
         <Button><ArrowLeft/>Back</Button>
        </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>     
            {/*FormSection */}
            <FormSection 
             selectedTemplate={selectedTemplate}
             userFormInput={(v:any)=> GenerateAIContent(v)}
             loading={loading}
            />

             {/*OutputSection */}
             <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput}/>
            </div>
 
         </div>
    </div>
  )
}

export default CreateNewContent