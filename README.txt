Lens by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


This is Lens, a full screen (and entirely responsive) photo gallery design. Unlike previous
designs I've done in this vein (Parallelism, for instance), this one eschews the usual
lightbox in favor of a completely full screen experience -- one that I'm happy to say
translates awesomely all the way down to the tiniest of mobile devices. Full instructions
below!

Demo images* courtesy of Unsplash, a radtastic collection of CC0 (public domain) images
you can use for pretty much whatever.

(* = Not included)

Feedback, bug reports, and comments are not only welcome, but strongly encouraged :)

AJ
aj@lkn.io | @ajlkn


Instructions:

	Overview:

		Lens is made up of three primary components:

		- The "main wrapper": The skinny little column on the right. Home to what little
		  "regular" content you may have (header, footer, anything else you want to cram
		  in there), as well as ...

		- The "thumbnails" section: A grid of thumbnails pointing to their respective
		  full size images.

		- The "viewer": Basically the rest of the page, and basically where your full size
		  images will show up when a thumbnail is clicked.

		Note: Only the main wrapper and the thumbnails section are actually present in
		index.html. The viewer will be dynamically created on page load.

	How it works:

		Just add your thumbnails to the thumbnails section in the following format:

			<article>
				<a class="thumbnail" href="path/to/fullsize.jpg">
					<img src="path/to/thumbnail.jpg" alt="" />
				</a>
				<h2>Title</h2>
				<p>Description.</p>
			</article>

		And that's it. Lens will figure out the rest.

	The "data-position" attribute:

		As a full screen experience, the viewer will be subject to changes in its size and,
		consequently, its aspect ratio. Since your full size images are basically applied as
		backgrounds to the viewer itself, this means they'll probably (okay, definitely) get
		cropped. All is not lost, however, as you can use the optional "data-position" attribute
		to control how the full size image is positioned within the viewer. To do this, simply
		add it to your thumbnail's <a> element and set it to any valid "background-position"
		value. For example, this:

			<a class="thumbnail" href="path/to/fullsize.jpg" data-position="top left">...</a>

		... positions this particular full size image in the top left corner of the viewer (as
		opposed to its center, the default), effectively limiting cropping to everything but
		the top left corner.

	Keyboard shortcuts:

		Lens is set up to respond to the following keyboard shortcuts:

		- Left Arrow: Go to previous image.
		- Right Arrow: Go to next image.
		- Up Arrow: Go to image above the current one in the thumbnails section.
		- Down Arrow: Go to image below the current one in the thumbnails section.
		- Space: Go to next image.
		- Escape: Toggle the main wrapper.

		Note: All keyboard shortcuts are disabled when the "xsmall" breakpoint is active
		(since they don't really make a whole lot of sense there).

	Other stuff:

		- The main wrapper can be moved to the left by changing the "misc.main-side" variable
		  in assets/sass/libs/_vars.scss to "left" (and of course recompiling your CSS).

		- Additional tweakable settings can be found at the top of assets/js/main.js, but
		  be aware most of these need to sync with certain Sass variables (see comments
		  for details).


Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fontawesome.io)

	Other:
		jQuery (jquery.com)
		Responsive Tools (github.com/ajlkn/responsive-tools)


---

가족 사진첩 커스터마이즈 (이 저장소)

	앨범 데이터:
		assets/js/albums.js 파일에서 FAMILY_ALBUMS 객체를 편집합니다.
		각 키(ddal, adeul)에 사진 항목 배열을 넣습니다.
		항목 형식: full(원본 경로), thumb(썸네일 경로), title, caption, alt
		선택: position (예: "top center") — Lens 배경 맞춤

	이미지 폴더:
		images/ddal/, images/adeul/
		JPG/WEBP 등을 넣고 albums.js에서 경로를 지정하면 됩니다.

	GitHub Pages 배포:
		1. GitHub에 새 저장소를 만들고 이 폴더 내용을 푸시합니다.
		2. 저장소 Settings → Pages → Branch를 main(또는 master) / 폴더 root로 지정합니다.
		3. 잠시 후 https://<사용자명>.github.io/<저장소명>/ 에서 확인합니다.
		공개 저장소는 누구나 URL로 볼 수 있으니, 사진 공개 범위를 확인하세요.

	로컬 미리보기:
		index.html을 브라우저로 직접 열거나, 간단한 정적 서버를 사용하세요.
		(일부 브라우저는 file://에서 제한이 있을 수 있습니다.)