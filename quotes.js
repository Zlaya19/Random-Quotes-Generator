const button = document.getElementById('bootstrapBtn');
const output = document.getElementById('output');

  
//    When the button is clicked, the eventListener starts a function that gives us
//    one of the ten quotation marks that we have written in the quotation mark array.


button.addEventListener('click', () => {


    //  we create an empty variable and use it later to write less code
        let randomQuote = '';

    const quotes = [

        {author: 'Khalil Gibran', quote: 'Qualities of Good Citizens ... is to admire what others have created in love and faith'},
        {author: 'Tevin Hansen', quote: 'Mrs. Percy understood that staying beautiful all day long is the most important aspect of being married...'},
        {author: 'George MacDonald', quote: 'I write, not for children,but for the child-like, whether they be of five, or fifty, or seventy-five'},
        {author: 'Sri Chinmoy', quote: 'Hope and faith are two intimate brothers; they always go together. Hope nourishes faith and faith treasures hope'},
        {author: 'Maya Angelou', quote: 'The idea of overcoming is always fascinating to me, because few of us realize how much energy we have expended just to be here today.'},
        {author: 'Queen Victoria', quote: 'Oh, that peace may come.'},
        {author: 'Ed Slott', quote: 'Look at the score at the end of the #game.'},
        {author: 'Steven Redhead', quote: 'Life is whatever you make it, a heaven or hell on earth.'},
        {author: 'Debasish Mridha', quote: 'Wisdom is the ultimate source of kindness and happiness.'},
        {author: 'Leonardo Da Vinci', quote: 'A well-spent day brings happy sleep.'}

    ];

    //  gives us a random item from the quotes array and we append it to the randomQuote variable
        randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    //  we use flex-direction column to append both values on the same output div horizontally
            output.innerHTML = `<h2>${randomQuote.author}</h2><br>`;

            output.innerHTML += `<h5>${randomQuote.quote}</h5><br>`;
    

});