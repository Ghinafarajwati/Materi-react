import React from 'react'
import ImgStyle from '../Images/ImgStyle.png'
import ImgStyle2 from '../Images/ImgStyle2.png'
import ImgRouter from '../Images/ImgRouter.png'
import ImgConditional from '../Images/ImgConditional.png'
import ImgNested from '../Images/ImgNested.png'
import ImgArrayofObject from '../Images/ImgArrayofObject.png'
import ImgProps1 from '../Images/ImgProps1.png'
import ImgProps2 from '../Images/ImgProps2.png'
import ImgUseState from '../Images/ImgUseState.png'
import ImgOnChange from '../Images/ImgOnChange.png'
import ImgUseEffect from '../Images/ImgUseEffect.png'

import {Header,Body} from '../Styles/LandingStyle'
import {Container,Row,Col} from 'react-bootstrap'


const LandingPage = () => {
  const onClickImage = () => {
    alert('You Click Image')
  }
  return (
    <div>
        <Header>
        <h2>MATERI PER-CODINGAN</h2>
        </Header>
        
        <Container>
          <Row>
            <Col>
              <Body>
              <p><span>Install React</span>
                <br></br> npx create-react-app</p>
              <p><span>Install Style Component</span>
                <br></br>npm install --save styled-components
                <br></br>
                <br></br>Pada halaman style: 
                <br></br>import styled from "styled-components"
                <br></br>
                <img id='ImageStyle' src={ImgStyle} alt=""></img>
                <br></br> Pada halaman utama:
                <br></br>
                <img id='ImageStyle2' src={ImgStyle2} alt=""></img>
              </p>

              <p><span>Install React Boostrap</span>
                <br></br> npm install react-bootstrap bootstrap
                <br></br> Sisanya liat aelah di dokumentasi.
                <a href="https://react-bootstrap.netlify.app/getting-started/introduction/"> Cek Disini</a>
              </p>

              <p><span id='color'>Install React Router</span>
                <br></br> npm i react-router-dom
                <br></br>
              </p>
                <img id='ImageRouter' src={ImgRouter} alt="Router" onClick={onClickImage}></img>

              <p><span>Conditional JSX</span>
                <br></br> Liat aja pokonya.
                <br></br>
              </p>
                <img id='ImageConditional' src={ImgConditional} alt="Conditional"></img>

              <p><span>Nested Object</span>
                <br></br> Nested Object adalah object yang berasal dari turunan object lainnya.
                <br></br>
              </p>
                <img id='ImgNested' src={ImgNested} alt="Nested"></img>

              <p><span>Array of Object</span>
                <br></br> Object tidak hanya bisa menyimpan 1 data, namun juga banyak data seperti array. Kita bisa menggunakan Array of Object untuk data yang lebih dari 1.
                <br></br>
              </p>
                <img id='ImgArrayofObject' src={ImgArrayofObject} alt="ImgArrayofObject"></img>

              <p><span>Stateless dan Statefull</span>
                <br></br>Stateless berati tidak memiliki state. Dia hanya memiliki props.
                <br></br>Statefull berati memiliki state dan bisa mengirim state tersebut ke komponen
                <br></br>
              </p>
              <p>Ini lagi Stateless :</p>
              <img id='ImgProps2' src={ImgProps2} alt="ImgProps1"></img>
              <p>Tambah ini jadi statefull :</p>
              <img id='ImgProps1' src={ImgProps1} alt="ImgProps2"></img>
              
              <p><span>REACT HOOKS</span>
                <br></br> Hooks untuk memudahkan penggunaan functional components agar bisa menggunakan state dan lifecycle lainnya.
                <br></br> Hooks yang sering digunakan adalah useState dan useEffect.
                <br></br>
              </p>
                <p>useState dan useEffect :</p>
                <div id='Imghook'>
                <img id='ImgUseState' src={ImgUseState} alt="ImgUseState"></img>
                <img id='ImgOnChange' src={ImgOnChange} alt="ImgOnChange"></img>
                </div>
                <ol>
                  <li>Count dan setCount disebut sebagai variable.</li>
                  <li>State awalnya adalah 0, sebelum terjadi perubahan</li>
                  <li>setCount berisi count + 1</li>
                </ol>
                <p>UseEffect :</p>
                <img id='ImgUseEffect' src={ImgUseEffect} alt="ImgUseEffect"></img>
              </Body>
            </Col>

            <Col>
              <p><span>CATATAN</span>
                <br></br> Element akan menjadi javascript jika menggunakan {"{ }"}.
                <br></br> Assignment Operator {"(=)"} untuk menyimpan nilai
                <br></br> Method adalah action dari sebuah object
              </p>
              <br></br>
              <p><span>Tipe Data</span>
                <ol>
                  <li>Number : Tipe data semua angka pokoknya. //2,4, 6, 22, 100, 0.5</li>
                  <li>String : Tipe data huruf pokoknya</li>
                  <li>Boolean : Tipe data True or False</li>
                  <li>Null : Tidak memiliki nilai</li>
                  <li>Undefined : Merepresentasikan variable yg tidak memiliki nilai. Kalo error pokoknya.</li>
                  <li>Object : Pokoknya bentuknya curly braces.</li>
                </ol>
              </p>
              <br></br>
              <p><span>Variable</span>
                <ol>
                  <li>Var</li>
                  <li>Let</li>
                  <li>Const : Kalo nilainya gabisa diubah</li>
                </ol>
              </p>
              <br></br>
              <p><span>Comparison dan Logical Operator :</span>
                <ul>
                  <li>Lebih kecil dari {"<"} </li>
                  <li>Lebih kecil atau sama dengan {"<="}</li>
                  <li>Sama dengan {"==="}</li>
                  <li>Tidak sama dengan {"!=="}</li>
                  <li>AND operator : &&</li>
                  <li>OR operator : ||</li>
                  <li>NOT operator : !</li>
                </ul>
              </p>
              <br></br>
              <p><span> ARRAY {"[ ]"}</span>
                <br></br> Untuk menyimpan banyak nilai 
                <br></br> let team = {"['Ghina', 21, True]"}
              </p>
              <br></br>
              <p><span> State & Props</span>
              <ol>
                <li>State dan props adalah objek khusus yang menyimpan data untuk komponen.</li>
                <li>State adalah objek yang digunakan untuk menyimpan data di dalam komponen, sedangkan props adalah objek yang digunakan untuk menyimpan data yang diterima dari luar komponen.</li>
                <li>Data di dalam state bisa diubah, sedangkan di dalam props tidak bisa karena sifatnya read-only.</li>
                <li>Untuk mengubah nilai pada state, bisa menggunakan method setState {"()"}.</li>
              </ol>
              </p>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default LandingPage
