// const elem = document.getElementById('display')
const elem = document.getElementById('iframe')
fetch("./ReadMe.md")
// fetch("hello.txt")
.then(res => res.text())
.then(content => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urls = content.match(urlRegex);
    if (urls) {
        console.log('Found URLs:');
        // urls.forEach(url => {
        //     console.log(url);
        //     // elem.innerHTML += url;

        // });
        console.log(urls[0])
        elem.src=urls[0];
    } else {
    console.log('No URLs found in the file content.');
    } 
})
.catch(err => console.log(err));
