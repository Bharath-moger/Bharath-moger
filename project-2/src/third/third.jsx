import React from "react";
import "./third.css"
// import store from "../image/store.png"
const Third = ()=>{
 return(
    <div className="third-container">
        <div className="notification">
            <img width="20px" src="https://img.icons8.com/?size=100&id=88624&format=png&color=000000" alt="" />
            <img width="25px" src="https://img.icons8.com/?size=100&id=98957&format=png&color=000000" alt="" />
            </div>
           
            <p className="head-p">Storage</p>
            <img src="https://www.simplifiedcoding.net/wp-content/uploads/2020/11/Screenshot_20201124_212849.png" alt="" className="storage" />
           <div className="storage-items">
            <div className="doc">
                <img width="20px" src="https://img.icons8.com/?size=100&id=12160&format=png&color=000000" alt="" />
                <div className="doc-text">
                    <p className="mid-p">Document</p>
                    <p className="small-text">994 files</p>
                </div>
                <p className="blue">2.2 GB</p>
            </div>
            <div className="doc">
                <img width="20px" src="https://img.icons8.com/?size=100&id=16071&format=png&color=000000" alt="" />
                <div className="doc-text">
                    <p className="mid-p">Records</p>
                    <p className="small-text">103 files</p>
                </div>
                <p className="blue">2.9 GB</p>
            </div>
            <div className="doc">
                <img width="20px" src="https://img.icons8.com/?size=100&id=bjHuxcHTNosO&format=png&color=000000" alt="" />
                <div className="doc-text">
                    <p className="mid-p">Image</p>
                    <p className="small-text">1000 files</p>
                </div>
                <p className="blue">3.2 GB</p>
            </div>
            <div className="doc">
                <img width="20px" src="https://img.icons8.com/?size=100&id=Bri4HBrgCsPa&format=png&color=000000" alt="" />
                <div className="doc-text">
                    <p className="mid-p">Audio Files</p>
                    <p className="small-text">100 files</p>
                </div>
                <p className="blue">3 GB</p>
            </div>
            <div className="doc">
                <img width="20px" src="https://img.icons8.com/?size=100&id=1FE2HGszFS4w&format=png&color=000000" alt="" />
                <div className="doc-text">
                    <p className="mid-p">Videos Files</p>
                    <p className="small-text">994 files</p>
                </div>
                <p className="blue">12 GB</p>
            </div>
           </div>
            <div className="import">
                <img src="https://img.icons8.com/?size=100&id=rLcIf7B-_JjH&format=png&color=228BE6" alt="" />
                <p className="mid-p">Import File</p>
            </div>

    </div>
 )
}
export default Third