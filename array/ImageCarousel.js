let output = document.getElementById('carousel')

let ImageCount = 0

let images = ['1', '2', '3', '4', '5']
let imageColor = ['111', '222', '00FF00', '333', '0000FF']

let swapImage = ()=>{
  ImageCount++
if(ImageCount >= images.length)

  output.src = 'http://via.placeholder.com/350x150/' + images[ImageCount] + '/fff?text=image' imageColor[ImageCount];
}