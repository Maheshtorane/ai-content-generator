export default [
    {
        name: 'Instagram Hashtag Generator',
        desc: 'An AI tool that generates relevant Instagram hashtags based on your content.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/732/732202.png',
        aiPrompt: 'Provide 10 relevant Instagram hashtags in bullet format based on the given niche and content description.',
        slug: 'generate-instagram-hashtags',
        form: [
            {
                label: 'Enter your content niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter content description',
                field: 'textarea',
                name: 'description'
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post content generator.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/10045/10045827.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate blog content based on the provided topic and outline.',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that generates creative blog topic ideas based on your niche.',
        category : 'Blog',
        icon: ' https://cdn-icons-png.flaticon.com/128/9431/9431872.png ',
        slug: 'blog-topic-ideas',
        aiPrompt: 'Provide 5 unique blog topic ideas based on the given niche and outline.',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter any specific themes or keywords',
                field: 'textarea',
                name: 'themes'
            }
        ]
    },
    {
        name: 'YouTube SEO Title Generator',
        desc: 'An AI tool that creates optimized titles for your YouTube videos based on your content and keywords.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/15120/15120846.png',
        slug: 'youtube-seo-title-generator',
        aiPrompt: 'Generate 5 SEO-friendly YouTube titles based on the given video topic and keywords.',
        form: [
            {
                label: 'Enter your video topic',
                field: 'input',
                name: 'videoTopic',
                required: true
            },
            {
                label: 'Enter relevant keywords',
                field: 'textarea',
                name: 'keywords'
            }
        ]
    },
    {
        name: 'YouTube Description Generator',
        desc: 'An AI tool that creates engaging descriptions for your YouTube videos based on your content and keywords.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/10125/10125341.png',
        slug: 'youtube-description-generator',
        aiPrompt: 'Generate a compelling YouTube video description based on the provided video topic and keywords.',
        form: [
            {
                label: 'Enter your video topic',
                field: 'input',
                name: 'videoTopic',
                required: true
            },
            {
                label: 'Enter relevant keywords or themes',
                field: 'textarea',
                name: 'keywords'
            }
        ]
    },
    {
        name: 'Emoji Text Enhancer',
        desc: 'An AI tool that enhances your text by adding relevant emojis for better engagement.',
        category: 'Text Enhancement',
        icon: 'https://cdn-icons-png.flaticon.com/128/7505/7505512.png',
        slug: 'emoji-text-enhancer',
        aiPrompt: 'Add relevant emojis to the provided text to enhance engagement and expressiveness.',
        form: [
            {
                label: 'Enter your text',
                field: 'textarea',
                name: 'text',
                required: true
            },
            {
                label: 'Specify any preferred themes or emotions',
                field: 'input',
                name: 'themes'
            }
        ]
    },
    {
        name: 'Article Rewriter',
        desc: 'An AI tool that rewrites articles to ensure originality and eliminate plagiarism.',
        category: 'Content Creation',
        icon: 'https://cdn-icons-png.flaticon.com/128/9458/9458682.png',
        slug: 'article-rewriter',
        aiPrompt: 'Rewrite the provided article to make it unique and plagiarism-free.',
        form: [
            {
                label: 'Enter the article text',
                field: 'textarea',
                name: 'articleText',
                required: true
            },
            {
                label: 'Specify any preferred tone or style',
                field: 'input',
                name: 'tone'
            }
        ]
    },
    {
        name: 'YouTube Tags Generator',
        desc: 'An AI tool that generates relevant tags for your YouTube videos based on the content and keywords.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968852.png',
        slug: 'youtube-tags-generator',
        aiPrompt: 'Generate a list of relevant YouTube tags based on the provided video topic and keywords.',
        form: [
            {
                label: 'Enter your video topic',
                field: 'input',
                name: 'videoTopic',
                required: true
            },
            {
                label: 'Enter relevant keywords',
                field: 'textarea',
                name: 'keywords'
            }
        ]
    },

    {
        'name': 'Education Question Answer Generator',
        'desc': 'An AI tool that provides detailed answers to your educational questions based on specified subjects or topics.',
        'category': 'Education',
        'icon': 'https://cdn-icons-png.flaticon.com/128/10125/10125341.png',
        'slug': 'education-question-answer-generator',
        'aiPrompt': 'Generate detailed answers to the provided educational questions based on the specified subject or topic.',
        'form': [
            {
                'label': 'Enter your educational question',
                'field': 'input',
                'name': 'question',
                'required': true
            },
            {
                'label': 'Select the subject or topic',
                'field': 'dropdown',
                'name': 'subject',
                'options': ['Math', 'Science', 'History', 'Literature', 'Geography'],
                'required': true
            },
            {
                'label': 'Enter any relevant keywords or themes',
                'field': 'textarea',
                'name': 'keywords'
            }
        ]
    }    
]