// offline data
firebase.firestore().enablePersistence()
    .catch(err => {
        if (err.code == 'failed-precondition') {
            // probbaly multiple tabs open at once
            console.log('persistence failed')
        }
        else if (err.code == 'unimplemented') {
            // lack of browser support
            console.log('persistence is not available')
        }
    })


firebase.firestore().collection('blogs').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
            addBlog(change.doc.data(), change.doc.id)
        }
        if (change.type === 'removed') {
            // 
        }
    });
})

const form = document.querySelector('form')
form.addEventListener('submit',evt => {
    evt.preventDefault();

    const blog = {
        title: form.title.value,
        description: form.description.value 
    }
    firebase.firestore().collection('blogs').add(blog) 
    .catch(err => console.log(err))

    form.title.value = '';
    form.description.value = '';

})

