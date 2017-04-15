var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    post.find({},function (err,docs) {
        if (err){
            console.error(err);
            return ;
        }
        res.render('index',{title:'博客首页',name:'博客',content:docs.reverse()})

    })


    // post.find({}, function(err, docs) {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }
    //     // docs 是包含了符合条件的多个文档的一个数组
    //     // console.log(docs);
    //     res.render('index', { title: '博客首页', name: '博客', content: docs.reverse()});
    // });

});


/* POST home page. */
router.post('/', function(req, res) {

    var content = req.body.content;
    var date = req.body.date;

    if (content && date) {
        var newPost = new post({
            content: content,
            date: date
        });

        newPost.save(function (err) {
            if (err) {
                console.error(err);
                return;
            }
            // newPost is saved!
            console.log('保存成功！');
            res.send(200);
        });
    }

    var deleteContent = req.body.deleteContent;

    if (deleteContent) {
        post.remove({content: deleteContent}, function(err) {
            if (err) {
                console.error(err);
                return;
            }
            console.log('删除成功！');
            res.send(200);
        });
    }

    var oldContent = req.body.oldContent,
        updateContent = req.body.updateContent;
    if (oldContent&&updateContent){
        post.update({content:oldContent},{$set:{'content':updateContent}},function (err) {
            if (err){
                console.error(err);
                return ;
            }
            console.log("更新成功！！");
            res.send(200);
        })

    }


    // if (oldContent && updateContent) {
    //     post.update({content: oldContent}, {$set: {'content': updateContent}}, function(err) {
    //         if (err) {
    //             console.error(err);
    //             return;
    //         }
    //         console.log('更新成功！');
    //         res.send(200);
    //     });
    // }
});

module.exports = router;


