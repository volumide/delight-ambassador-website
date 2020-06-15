export class Upload {
	
	imageUpload(event:any){
		let image: any
		if (event) {
		  let size = Math.floor(event.target.files[0].size/1024)
		  if (size >= 5001) {
			image = null
			return image
		  }else{
			image = event.target.files[0]
			return image
		  }
		}
	}

	formData(image){
		let formData = new FormData()
		formData.append('image', image)
		return formData
	}

	
	
}
