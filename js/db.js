firebase.firestore().collection('blogs').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach(change => {
        if(change.type === 'added')
        {
            addBlog(change.doc.data(),change.doc.id)
        }
        if(change.type === 'removed')
        {
            // 
        }
    });
})