import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const HotCollections = () => {
const { id } = useParams();
const [users, setUsers] = useState ([])
const [loading, setLoading] = useState(true);
const [data, setData] = useState ([])
const [error, setError] = useState(null); 

const fetchUsers = async () => {
  try {
    const { data } = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections');
    setUsers(data); 
    console.log(data); 
  } catch (error) {
    setError(error); 
    console.error('Error fetching users:', error); 
  } finally {
    setLoading(false); 
  }
};

useEffect(() => {
  fetchUsers(); 
}, []);

if (loading) return <div>Loading...</div>; 
if (error) return <div>Error: {error.message}</div>; 
 


  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {data && data.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to="/item-details">
                    <img src={item.nftImage} className="lazy img-fluid" alt="" /> 
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                    <img className="lazy pp-coll" src={item.authorImage} alt="" /> 
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>{item.title}</h4> 
                  </Link>
                  <span>{item.tokenId}</span> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotCollections;