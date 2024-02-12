import pic from '../../images/pic-1.jpg'


function First() {
  let a = 100
  let arr = ["Shiva","Vishnu","Brahma"]
  return (
   <div className='text-center'>
    <p className="lead text-primary text-center">Primitive value: <span className='text-dark'>{a}</span></p>
    <p className="lead text-primary">Array Elements:</p>
    {
      arr.map(ele=><p className='lead'>{ele}</p>)
    }
    <p className='lead text-primary'>Image using CDN link:</p>
    <img src="https://img.freepik.com/free-photo/cardano-blockchain-platform_23-2150411956.jpg" className='w-25' alt="" /><br/>
    <p className='lead mt-3 text-primary'>Downloaded image:</p>
    <img src={pic} className='w-25' alt="" />
   </div>
  );
}

export default First;
