const quoteList = ["your value does not depend on how other people see you",
                    "feel the fear and do it anyway",
                    "when you begin to use your gifts to serve others, you'll begin to feel all the warmth your life has to offer",
                    "you are not your negative thoughts",
                    "the more you like yourself, the less you'll need others to",
                    "it has gotten better before, it will get better again",
                    "the regret of not trying usually outweighs the outcome of failure",
                    "may everything you do be done with love",
                    "everything you do comes back to you",
                    "your worth isn't tied to productivity",
                    "life doesn't end when you lose yourself for a while",
                    "we ruin the garden by thinking about the thorns",
                    "a candle loses nothing when used to light another",
                    "the person you are becoming is more important than the person you have been",
                    "what you plant now, you will harvest later. always do your best",
                    "never be afraid to do whats right. society's punishments are small compared to the wound we inflict on our soul when we look the other way",
                    "you wouldn't be faced with challenges you weren't ready for",
                    "don't forget to love yourself",
                    "forgiveness is an attribute of the strong",
                    "live as if you were to die tomorrow, learn as if you were to live forever",
                ];

function quoteListPicker(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

document.getElementById("generateButton").onclick = function() {
    const pickedQuote = quoteListPicker(quoteList);
    document.getElementById("quote").innerHTML = pickedQuote;
}



