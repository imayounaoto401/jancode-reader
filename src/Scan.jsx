import React , { useState,useEffect } from 'react'
import Quagga from "quagga";



const Scan = (props) => {

  const [barcode,setBarcode] = useState("")


  useEffect(() => {
    Quagga.onDetected(result => {
      if (result !== undefined){
        setBarcode(result.codeResult.code)
      }
    });
    const config = {
      inputStream: {
        name : "Live",
        type : "LiveStream",
        target: '#preview',
        size: 1000,
        singleChannel: false
      },
      locator: {
        patchSize: "medium",
        halfSample: true
      },
      decoder: {
        readers: [{
          format: "ean_reader",
          config: {}
        }]
      },
      numOfWorker: navigator.hardwareConcurrency || 4,
      locate: true,
      src: null
    };

    Quagga.init(config, function(err) {
      if (err) {
        console.log(err);
        return
      }
      Quagga.start();
    });

  },[])

  return (
    <>
      <h2>バーコードスキャナ</h2>
      <hr />
      {barcode !== "" ? `バーコード：${barcode}` : "スキャン中"}
      <hr />
      <div id="preview"></div>
    </>
  )
}

export default Scan