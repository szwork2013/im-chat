document.addEventListener("plusready", function(){
	var cmr = plus.camera.getCamera();
	cmr.captureImage(function(){},function ( e ) {},{filename:"_doc/camera/",index:1} )
})