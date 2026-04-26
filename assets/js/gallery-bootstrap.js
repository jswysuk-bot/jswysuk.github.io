/*
	앨범 탭 + #thumbnails HTML 생성. main.js보다 먼저 로드되어 초기 마크업을 채웁니다.
*/
(function () {

	'use strict';

	function escapeHtml(text) {
		var div = document.createElement('div');
		div.textContent = text == null ? '' : String(text);
		return div.innerHTML;
	}

	function albumToHtml(items) {
		if (!items || !items.length) {
			return (
				'<article class="album-empty-msg">' +
					'<a class="thumbnail" href="images/shared/empty.svg"><img src="images/shared/empty.svg" alt="" /></a>' +
					'<h2>사진 없음</h2>' +
					'<p>이 앨범에 표시할 이미지가 없습니다. assets/js/albums.js를 편집하세요.</p>' +
				'</article>'
			);
		}

		return items.map(function (item) {
			var pos = item.position
				? ' data-position="' + escapeHtml(item.position) + '"'
				: '';
			return (
				'<article>' +
					'<a class="thumbnail" href="' + escapeHtml(item.full) + '"' + pos + '>' +
						'<img src="' + escapeHtml(item.thumb) + '" alt="' + escapeHtml(item.alt || '') + '" />' +
					'</a>' +
					'<h2>' + escapeHtml(item.title) + '</h2>' +
					'<p>' + escapeHtml(item.caption) + '</p>' +
				'</article>'
			);
		}).join('');
	}

	function setActiveTab(id) {
		var tabs = document.querySelectorAll('.album-tab');
		for (var i = 0; i < tabs.length; i++) {
			tabs[i].classList.toggle('active', tabs[i].getAttribute('data-album') === id);
		}
	}

	window.switchFamilyAlbum = function (id) {
		var items = window.FAMILY_ALBUMS[id];
		if (!items) return;

		var el = document.getElementById('thumbnails');
		if (el) el.innerHTML = albumToHtml(items);

		if (window.main && typeof main.rebuildFromThumbnails === 'function')
			main.rebuildFromThumbnails();

		setActiveTab(id);
	};

	function bindTabs() {
		var tabsRoot = document.getElementById('album-tabs');
		if (!tabsRoot) return;

		tabsRoot.addEventListener('click', function (e) {
			var btn = e.target.closest('.album-tab');
			if (!btn) return;
			var id = btn.getAttribute('data-album');
			if (id) window.switchFamilyAlbum(id);
		});
	}

	var order = window.FAMILY_ALBUM_ORDER || [];
	var first = order[0] || 'ddal';
	var th = document.getElementById('thumbnails');
	if (th) th.innerHTML = albumToHtml(window.FAMILY_ALBUMS[first]);

	if (document.readyState === 'loading')
		document.addEventListener('DOMContentLoaded', bindTabs);
	else
		bindTabs();

	setActiveTab(first);
})();
