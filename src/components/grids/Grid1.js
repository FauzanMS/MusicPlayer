import React from 'react';
import Card from './card/Card';
import './Grid1.css';
export default function Grid1() {
    const hits = [
        {   id:0,
            title : "STARBOY",
            img : "https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg",
        },
        {
            id:1,
            title : "MILIND GABA",
            img : "https://c.saavncdn.com/editorial/DilliKaMilindGaba_20190326043420.jpg",
        },
        {
            id:2,
            title : "JUSTIN",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6YSF2EOEwh4BnU9pwoInbA3nkCMF45Xr-ig&usqp=CAU",
        },
    ]
    const grids = hits.map(hit=>{
        return <Card key={hit.id} src={hit.img} id={hit.id}  title={hit.title} />
    })
    return (
        <>
        <p className="Grid1Head">Today's hits</p>
        <div className="Grid1">
{grids}
{grids}
{grids}
            {/* <Card src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg" title = "STARBOY"/>
            <Card src="https://c.saavncdn.com/editorial/DilliKaMilindGaba_20190326043420.jpg"  title="MILIND GABA" />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6YSF2EOEwh4BnU9pwoInbA3nkCMF45Xr-ig&usqp=CAU" title="JUSTIN"/>
            <Card src="https://www.masala.com/cloud/2021/08/01/cUdkTOh5-french-montana.jpg" title="MONTANA" />
            <Card src="https://i1.wp.com/99lyricstore.com/wp-content/uploads/2020/12/Jingle2BBell2BSong2BImage2BFeatures2BYo2BYo2BHoney.jpg" title = "JINGLE BELL"/>
            <Card src="https://images.hungama.com/c/1/346/ec5/57753969/57753969_300x300.jpg" title="TU AAKE DEKH"/>
            <Card src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg" title = "STARBOY"/>
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6YSF2EOEwh4BnU9pwoInbA3nkCMF45Xr-ig&usqp=CAU" title="JUSTIN"/>
            <Card src="https://www.masala.com/cloud/2021/08/01/cUdkTOh5-french-montana.jpg" title="MONTANA" />
            <Card src="https://i1.wp.com/99lyricstore.com/wp-content/uploads/2020/12/Jingle2BBell2BSong2BImage2BFeatures2BYo2BYo2BHoney.jpg" title = "JINGLE BELL"/>
            <Card src="https://images.hungama.com/c/1/346/ec5/57753969/57753969_300x300.jpg" title="TU AAKE DEKH"/>
            <Card src="https://c.saavncdn.com/editorial/DilliKaMilindGaba_20190326043420.jpg" title="MILIND GABA" /> */}
        </div>
        </>
    )
}
