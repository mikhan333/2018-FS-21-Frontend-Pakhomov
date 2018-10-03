const say = function (name) {
	window.addEventListener('load', function () {
        	var blog = document.createElement('div');
            	blog.innerHTML = `Hello, <strong>${name}</strong>`;
		blog.className = 'FirstBlog';
        	document.body.appendChild(blog);
	});
}

export default say;
