import React from 'react';
import { Component } from 'react';
import NavBar from './navigation';
import MasonryGallery from './masonry-gallery';

const data = [
  {
    src:"http://kosherhotels.co/wordpress/wp-content/uploads/2015/05/Yellowstone-national-parks.jpg",
    title: "Yellowstone National park backcountry, this view is beautifu.",
    author:"Ryan Kane",
    clanName:"First Clan",
    rating:'4.5'
  },
  {
    src:"http://static1.squarespace.com/static/52420833e4b06209130ccc07/t/54472f6ce4b0671f7c97db13/1413951341380/",
    title: "The quick brown fox jumped over the lazy dog"
  },
  {
    src:"http://cdn.history.com/sites/2/2015/09/iStock_000038100826_Large.jpg",
    title: 'The quick brown fox jumped over the lazy dog'
  },
  {
    src:"http://d1njyp8tsu122i.cloudfront.net/wp-content/uploads/Yellowstone-wolves-impact-elk.jpg",
    title: 'The quick brown fox jumped over the lazy dog'
  },
  {
    src:"http://cdn.allaspen.com/images/content/3925_5536_Aspen_Colorado_Hiking_La_Plata_md.jpg",
    title: 'The quick brown fox jumped over the lazy dog'
  },
  {
    src:"http://coloradoairtours.com/images/skydive-colorado2.jpg",
    title: 'The quick brown fox jumped over the lazy dog'
  },
  {
    src:"https://c1.staticflickr.com/9/8368/8596907142_2391d0fa7d_b.jpg",
    title: 'The quick brown fox jumped over the lazy dog'
  },
  {
    src:"https://peakmind.files.wordpress.com/2008/12/keyholeridgeroute2.jpg",
    title: 'The quick brown fox jumped over the lazy dog'
  },
  {
    src:"https://tmi2-tourmyindiapvtlt.netdna-ssl.com/blog/wp-content/uploads/2015/08/valley-of-flowers-national-park.jpg",
    title: 'The quick brown fox jumped over the lazy dog'
  },
  {
    src:"http://rockymountainwild.org/_site/wp-content/uploads/Ski-Resort-in-vail-Co1.bmp",
    title: 'The quick brown fox jumped over the lazy dog'
  },
  {
    src:"http://thewanderinghousewife.com/wp-content/uploads/2014/07/P10506531.jpg",
    title: 'The quick brown fox jumped over the lazy dog'
  },
  {
    src:"http://www.alpinist.com/media/ALP18/alp18-52-1.jpg",
    title: 'The quick brown fox jumped over the lazy dog'
  },
  {
    src:"http://www.alpinist.com/media/ALP18/alp18-52-1.jpg",
    title: 'The quick brown fox jumped over the lazy dog'
  },
  {
    src:"http://blog.theclymb.com/wp-content/uploads/2014/03/PCT.jpg",
    title: 'The quick brown fox jumped over the lazy dog'
  },
  {
    src:"http://www.pcta.org/wp-content/uploads/2012/10/snowcupsPhilipp-Kobel.jpg",
    title: 'The quick brown fox jumped over the lazy dog'
  },
  {
    src:"https://upload.wikimedia.org/wikipedia/commons/6/6d/04KJER0243.jpg",
    title: 'The quick brown fox jumped over the lazy dog'
  }
]

export default class App extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
     <div>
      <NavBar />
      {this.props.children}
      <MasonryGallery elements={data}/>
     </div>
   );
  }
}
