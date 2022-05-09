tailwind.config = {
    theme: {
        fontFamily : {
            'sans': ['Epilogue', 'sans-serif'],
        },
        extend: {
            colors: {
                'gray-light': 'hsl(0, 0%, 98%)',
                'gray-medium': 'hsl(0, 0%, 41%)',
                'gray-dark' : 'hsl(0, 0%, 8%)',
            },
            boxShadow: {
                'around': '0px 12px 50px -12px rgb(0 0 0 / 0.25)'
            }
        }
    }
}