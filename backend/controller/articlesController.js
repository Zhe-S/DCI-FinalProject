const articleModel = require('../models/Articles');
const cloudinary = require("cloudinary").v2;
const jwt = require('jsonwebtoken')

exports.getAllArticles = async (req, res, next) => {
    const allArticles = await articleModel.find().populate('userId', 'firstName lastName image ');
    // console.log("HIER ", allArticles)
    /*     newArticles = allArticles.map(article => {
            console.log(article.userId);
            return {
                ...article,
                userId: {
                    firstName: article.userId?.firstName || "",
                    lastName: article.userId?.lastName || "",
                    image: article.userId?.image || ""
                }
            }
        }
        ) */

    res.send(allArticles);

}

exports.getArticle = async (req, res, next) => {
    try {
        const foundArticle = await articleModel.findById(req.params.id);

        res.send(foundArticle);

    } catch (err) {
        next(err)
    }

}

/* exports.addArticle = async (req, res, next) => {
    try {
        let newArticle = new articleModel(req.body);
        if (req.body.image) {
            const uploadResult = await cloudinary.uploader.upload(req.body.image)
            console.log(uploadResult)
            newArticle.image = uploadResult.secure_url
        }
        await newArticle.save();
        console.log(newArticle)

        newArticle = await newArticle.populate('userId')
        res.json(newArticle);

    }
    catch (err) {
        console.log(err);
        next(err)
    }
} */

exports.addArticle = async (req, res, next) => {
    const { image } = req.body

    try {
        let articleData = req.body
        if (image) {
            const uploadResult = await cloudinary.uploader.upload(image)

            articleData = { ...req.body, image: uploadResult.secure_url }
        }


        let newArticle = new articleModel(articleData)
        newArticle = await newArticle.save()
        let testNewArticle = await newArticle.populate('userId')
        res.json(testNewArticle)
    }
    catch (err) {
        console.log(err);
        next(err)
    }
}

exports.updateArticle = async (req, res, next) => {
    //console.log(req.body)
    try {

        const id = req.params.id;
        const oldArticle = await articleModel.findById(id);
        oldArticle._doc.title = req.body.title;
        oldArticle._doc.text = req.body.text;
        oldArticle._doc.createDate = req.body.createDate;
        oldArticle._doc.image = req.body.image ? req.body.image : oldArticle.image;

        console.log("oldArticle: ", oldArticle)
        console.log("body", req.body);
        // oldArticle.title = req.body.title
        // oldArticle.text = req.body.text
        // oldArticle.image = req.body.image ? req.body.image : oldArticle.image
        const x = await articleModel.findByIdAndUpdate(id, oldArticle);
        console.log("x", x);
        res.send(oldArticle);

    } catch (err) {
        console.log(err);
        res.status(500).send(err)
    }

}

/* exports.updateArticle = async (req, res, next) => {
   
    try {

        var decoded = jwt.verify(req.headers.authorization, '88882bc9n5739025739rcuinoewhsrjksehfjksef');

        const id = req.params.id;
        const oldArticle = await articleModel.findById(id);
        oldArticle._doc.title = req.body.title;
        oldArticle._doc.text = req.body.text;
        oldArticle._doc.createDate = req.body.createDate;
        oldArticle._doc.image = req.body.imageUpdated ? req.body.image : oldArticle.image;
        console.log(decoded.id);
        console.log(oldArticle.userId);
        if (decoded.id === oldArticle.userId.toString()) {

            const x = await articleModel.findByIdAndUpdate(id, oldArticle);
            res.send(oldArticle);
        } else {
            res.send({ err: 'das ist Fehler' });
        }



         oldArticle.title = req.body.title
        oldArticle.text = req.body.text
         oldArticle.image = req.body.image ? req.body.image : oldArticle.image




    } catch (err) {
        console.log(err);
        res.status(500).send(err)
    }

} */

exports.canUserDeleteArticle = async (req, res, next) => {
    // Diese Methode muss noch in einem Router angemeldet werden
    /* req.body = {articleId: asdfasdf} 
    */
    try {
        var decoded = jwt.verify(req.headers.authorization, '88882bc9n5739025739rcuinoewhsrjksehfjksef');
        const articleFunded = await articleModel.findById(req.params.id); // oder ArticleId
        if (decoded.id === articleFunded.userId.toString()) {
            res.send("authorized")
        } else {
            res.send("not authorized")
        }

    } catch (err) {
        res.status(500).send(err)
    }
}

exports.deleteArticle = async (req, res, next) => {
    try {
        var decoded = jwt.verify(req.headers.authorization, '88882bc9n5739025739rcuinoewhsrjksehfjksef');

        const articleFunded = await articleModel.findById(req.params.id);

        if (decoded.id === articleFunded.userId.toString()) {

            const deleteIdArticle = await articleModel.findByIdAndDelete(req.params.id);
            res.send({ massge: 'Article deleted' });
        } else {
            res.send({ err: 'das ist Fehler' });
        }
        /*  const deleteIdArticle = await articleModel.findByIdAndDelete(req.params.id); */

    } catch (err) {
        res.status(500).send(err)
    }

}

