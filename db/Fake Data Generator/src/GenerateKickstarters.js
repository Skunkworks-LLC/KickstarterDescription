const Picture = (width = 1260, height = 720) => {
    return `https://source.unsplash.com/random`;
}

const GenerateUser = () => {
    return new Promise((resolve) => {
        axios.get('https://randomuser.me/api/').then((user) => {
            resolve(user.data.results[0]);
        });
    });
}

const randomNumber = (max, min) => {
    return Math.floor(Math.random() * min) + max;
}

const passesOdds = (chance = 0.50) => {
    return Math.random() < chance;
}

class Campaign {
    constructor(product) {
        this.aboutSection = this.generateSection(product);
        this.otherSections = this.generateSection(null, randomNumber(2, 5));
    }

    generateSection(product = null, amount = 1) {
        let sections = [];
        for (var i = 0; i < amount; i++) {
            let section = {};
            section.sectionTitle = product || faker.company.catchPhrase();
            section.sectionImage = Picture();
            section.sectionParagraph = faker.lorem.paragraphs();
            sections.push(section);
        }
        return sections;
    }
}

class FAQ {
    constructor() {
        this.questions = this.generateQuestions(randomNumber(0, 4));
    }

    generateQuestions(amount) {
        let questions = [];
        for (var i = 0; i < amount; i++) {
            let question = {};
            question.inquiry = faker.lorem.sentence().slice(0, -1) + '?';
            question.answer = faker.lorem.paragraph();
            questions.push(question);
        }
        return questions;
    }
}

class Updates {
    constructor() {
        this.posts = this.generatePosts(randomNumber(1, 3));
    }

    generatePosts(amount) {
        let posts = [];
        for (var i = 0; i < amount; i++) {
            let post = {};
            post.event = faker.company.bs();
            post.title = faker.company.bsBuzz();
            post.date = faker.date.recent();
            post.paragraph = faker.lorem.paragraphs();
            posts.push(post);
        }
        return posts;
    }
}

const GenerateComment = (odds) => {
    return new Promise((resolve) => {
        GenerateUser().then((user) => {
            let comment = {};
            let firstName = (user.name.first)[0].toUpperCase() + (user.name.first).substring(1);
            let lastName = (user.name.last)[0].toUpperCase() + (user.name.last).substring(1);
            comment.user = firstName + ' ' + lastName;
            comment.text = faker.lorem.paragraph();
            comment.icon = user.picture.thumbnail;
            comment.postTime = faker.date.recent();
            comment.childComments = [];
            GenerateComments(odds - 0.25).then((childComments) => { 
                comment.childComments = childComments;
                resolve(comment);
            });
        });
    });
}

const GenerateComments = (odds = 0.75, max = 5) => {
    return new Promise((resolve) => {
        let comments = [];
        if (passesOdds(odds)) {
            let numberOfComments = randomNumber(1, max);
            for (var i = 0; i < numberOfComments; i++) {
                comments.push(GenerateComment(odds));
            }
        }
        Promise.all(comments).then((newComments) => {
            resolve(newComments);
        });
    });
}

const generateKickStarter = (id) => {
    return new Promise((resolve) => {
        GenerateComments().then((comments) => {
            let project = {}; 
            project.id = id;
            project.name = faker.commerce.productName();
            project.campaign = new Campaign(project.name);
            project.faq = new FAQ();
            project.backers = randomNumber(50, 1000);
            project.updates = new Updates();
            project.comments = comments;
            resolve(project);
        });
    })
}

const generateKickStarters = (amount = 1, id, callback) => {
    let kickStarters = [];
    for (var i = 0; i < amount; i++) {
        kickStarters.push(generateKickStarter(id+i));
    }
    Promise.all(kickStarters).then((projects) => {
        axios.post('http://127.0.0.1:1600/description', {KickStarters: projects}).then(() => {
            callback();
        });
    });
}

const fillDatabase = (total = 100, amountToCreate = 5) => {
    if (total > 0) {
        total -= amountToCreate;
        let id = '' + total + randomNumber(3, 9);
        generateKickStarters(amountToCreate, id, () => {
            fillDatabase(total);
        });
    }
}

fillDatabase();