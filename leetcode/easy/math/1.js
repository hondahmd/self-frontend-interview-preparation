var fizzBuzz = function(n) {
    return Array(n).fill().map((_, index) => {
        const div3 = (index + 1) % 3;
        const div5 = (index + 1) % 5;
        if (!div3 && !div5) return "FizzBuzz";
        else if (!div3) return "Fizz";
        else if (!div5) return "Buzz";
        else return String(index + 1);
    })
};