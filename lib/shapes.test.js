const {Triangle} = require('./shapes.js');

describe('Triangle', () => {
    describe('done', () => {
        it('should return logo with user choice of shape color, tex, and text color', () => {
            const triangle = new Triangle('lime','EKO','aliceblue');
            expect(triangle.render()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="lime"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="aliceblue">EKO</text>
        </svg>
        `
            );
        });
    })
    
});
const {Square} = require('./shapes.js');

describe('Square', () => {
    describe('done', () => {
        it('should return logo with user choice of shape color, tex, and text color', () => {
            const square = new Square('lime','EKO','aliceblue');
            expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="lime"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="aliceblue">EKO</text>
        </svg>
        `
            );
        });
    })
    
});
const {Circle} = require('./shapes.js');

describe('Circle', () => {
    describe('done', () => {
        it('should return logo with user choice of shape color, tex, and text color', () => {
            const circle = new Circle('lime','EKO','aliceblue');
            expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="lime" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="aliceblue">EKO</text>
        </svg>
        `
            );
        });
    })
    
});