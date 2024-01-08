const button = document.querySelector('#btn');
const paragraph = document.querySelector('#par');

const quotes = [
      "When someone tells me 'no,' it doesn't mean I can't do it, it simply means I can't do it with them. -- Karen E. Quinones Miller",
      "Pride is holding your head up when everyone around you has theirs bowed. Courage is what makes you do it. -- Bryce Courtenay",
"Always be yourself and have faith in yourself. Do not go out and look for a successful personality and try to duplicate it. -- Bruce Lee",
"When you're different, sometimes you don't see the millions of people who accept you for what you are. All you notice is the person who doesn't. -- Jodi Picoult",
"As soon as you trust yourself, you will know how to live. -- Johann Wolfgang von Goethe",
"You cannot be lonely if you like the person you're alone with. -- Wayne Dyer",
"Just pick a goal, a goal you truly want to achieve, and take a clear-eyed look at your weaknesses -- not so you'll feel less confident, but so you can determine exactly what you need to work on. Then get to work. Celebrate small successes. Analyze your weaknesses. Keep going. As you gain skill, you'll also gain a feeling of genuine confidence, one that can never be taken away--because you've earned it.",
"Don't waste your energy trying to change opinions ... do your thing, and don't care if they like it. -- Tina Fey",
"The way to develop self-confidence is to do the thing you fear and get a record of successful experiences behind you. -- William Jennings Bryan",
"If you hear a voice within you say 'you cannot paint,' then by all means paint, and that voice will be silenced. -- Vincent van Gogh",
"Don't wait until everything is just right. It will never be perfect. There will always be challenges, obstacles, and less than perfect conditions. So what? Get started now. With each step you take, you will grow stronger and stronger, more and more skilled, more and more self-confident, and more and more successful. -- Mark Victor Hansen",
"You wouldn't worry so much about what others think of you if you realized how seldom they do. -- Eleanor Roosevelt",
"Low self-confidence isn't a life sentence. Self-confidence can be learned, practiced, and mastered -- just like any other skill. Once you master it, everything in your life will change for the better. -- Barrie Davenport",
"Once we believe in ourselves, we can risk curiosity, wonder, spontaneous delight, or any experience that reveals the human spirit. -- E.E. Cummings",
"Trust yourself. Create the kind of self that you will be happy to live with all your life. Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement. -- Golda Meir",
"One important key to success is self-confidence. An important key to self-confidence is preparation. -- Arthur Ashe",
"It is confidence in our bodies, minds, and spirits that allows us to keep looking for new adventures. -- Oprah Winfrey",
"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. -- Ralph Waldo Emerson",
"But failure has to be an option in art and in exploration -- because it's a leap of faith. And no important endeavor that required innovation was done without risk. You have to be willing to take those risks. -- James Cameron",
"People are like stained-glass windows. They sparkle and shine when the sun is out, but when the darkness sets in their true beauty is revealed only if there is light from within. -- Elisabeth Kübler-Ross",
"Confidence comes not from always being right but from not fearing to be wrong. -- Peter T. McIntyre",
"Argue for your limitations and, sure enough, they're yours. --Richard Bach",
"The courage to be is the courage to accept oneself, in spite of being unacceptable. -- Paul Tillich",
"If we all did the things we are capable of doing, we would literally astound ourselves. -- Thomas Alva Edison",
"Shyness has a strange element of narcissism, a belief that how we look, how we perform, is truly important to other people. -- Andre Dubus",
"Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness, that most frightens us. We ask ourselves, 'Who am I to be brilliant, gorgeous, talented, fabulous?' Actually, who are you not to be? -- Marianne Williamson",
"Talk to yourself like you would to someone you love. -- Brené Brown",
"Trust yourself. You know more than you think you do. -- Dr. Benjamin Spock",
"Successful people have fear, successful people have doubts, and successful people have worries. They just don't let these feelings stop them. -- T. Harv Eker",
"You can have anything you want if you are willing to give up the belief that you can't have it. --Dr. Robert Anthony",
"It is not the mountain we conquer, but ourselves. --Sir Edmund Hillary",
"To love oneself is the beginning of a lifelong romance. -- Oscar Wilde",
"Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy. -- Dale Carnegie",
"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. -- Helen Keller",
"Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude. -- Thomas Jefferson",
"Confidence is a habit that can be developed by acting as if you already had the confidence you desire to have. -- Brian Tracy",
"If you are insecure, guess what? The rest of the world is too. Do not overestimate the competition and underestimate yourself. You are better than you think. -- T. Harv Eker",
"To anyone that ever told you you're no good ... They're no better. -- Hayley Williams",
"Always remember you are braver than you believe, stronger than you seem, and smarter than you think. -- Christopher Robin",
"You have no control over other people's taste, so focus on staying true to your own. -- Tim Gunn",
"No one can make you feel inferior without your consent. -- Eleanor Roosevelt",
"The moment you doubt whether you can fly, you cease forever to be able to do it. -- J.M. Barrie",
"It's a dead-end street if you sit around waiting for someone else to tell you you're OK. -- Michael Pitt",
"I think that the power is the principle. The principle of moving forward, as though you have the confidence to move forward, eventually gives you confidence when you look back and see what you've done. -- Robert Downey Jr.",
"Twenty years from now, you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sail. Explore. Dream. Discover. -- Mark Twain",
"Don't be satisfied with stories, how things have gone with others. Unfold your own myth. -- Rumi",
"We avoid the things that we're afraid of because we think there will be dire consequences if we confront them. But the truly dire consequences in our lives come from avoiding things that we need to learn about or discover. -- Shakti Gawain",
"Persons of high self-esteem are not driven to make themselves superior to others; they do not seek to prove their value by measuring themselves against a comparative standard. Their joy is being who they are, not in being better than someone else. -- Nathaniel Branden",
"Reflect upon your present blessings, of which every man has many -- not on your past misfortunes, of which all men have some. -- Charles Dickens",
"Tension is who you think you should be, relaxation is who you are. -- Chinese proverb",
]

button.addEventListener("click", function(){
      let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      //here we want to say that we need par to be displayed, after we click on the button
      par.style.display = "block";
    paragraph.textContent = randomQuote;
} )