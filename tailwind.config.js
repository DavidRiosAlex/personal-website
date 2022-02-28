module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            brightness: {
                25: '.25',
                175: '1.75',
            },
            boxShadow: {
                'gray-800-0.6': '0 25px 60px -15px rgba(255, 255, 255, 0.6)',
                'gray-800-0.5': '0 25px 60px -15px rgba(255, 255, 255, 0.5)',
                'gray-800-0.4': '0 25px 60px -15px rgba(255, 255, 255, 0.4)',
                'gray-800-0.3': '0 25px 60px -15px rgba(255, 255, 255, 0.3)',
                'gray-800-0.2': '0 25px 60px -15px rgba(255, 255, 255, 0.2)',
                'gray-800-0.1': '0 25px 60px -15px rgba(255, 255, 255, 0.1)',
            },
            colors: {
                'regal-blue': '#243c5a',
                'fluor-blue': '#4db5fe'
            }
        },
        minWidth: {
            '100': '100px',
            '200': '200px',
            '300': '300px',
            '400': '400px',
            '500': '500px',
        },
        width: {
            '1.5/6': '25%'
        }
    },
    plugins: [],
};