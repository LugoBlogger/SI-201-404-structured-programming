let portfolioSource, portfolioTarget

portfolioSource = {"BMRI": 200};
portfolioTarget = {"UNVR": 220, "BMRI": 180, "TLKM": 100};
portfolioTarget = {...portfolioTarget, ...portfolioSource};
console.log(portfolioTarget);

portfolioSource = {"BMRI": 200};
portfolioTarget = {"UNVR": 220, "BMRI": 180, "TLKM": 100};
portfolioTarget = {...portfolioSource, ...portfolioTarget};
console.log(portfolioTarget);