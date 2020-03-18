import React from "react"
//import Detail from "./Detail"
//import { withRouter } from 'react-router';
import styled from "styled-components"
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const imgUrl = "https://image.tmdb.org/t/p/w154/";

const Img =styled.img`
width:100%;
height:100%;
border-radius:4px;
`

const Div=styled.div`
   position: relative;
   margin-top: 10px!important;
   transition: transform;
   transition-duration: 0.2s;
   color: white;
    
   :hover {
        cursor: pointer;
        transform: scale(1.1);
   }
   

  @media screen and (max-width: 1500px) {
    width: 200px!important;
  }
  @media screen and (max-width: 640px) {
    width:170px!important;
  }
  
  @media screen and (max-width: 375px) {
    width:150px!important;
    margin: 0 auto;
    justify-content:space-between!important;
    width:40%!important;
  }



`

const StyledRating = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0.25rem;
  padding: 0.2rem;
  border-radius: 10%;
  background-color: rgba(0, 0, 0, 0.1);
`;

const StyledStarRoundedIcon=styled(StarRoundedIcon)`
color: yellow;`

const StyledTitle=styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0.25rem;
  padding: 0.2rem;
  background-color: rgba(0, 0, 0, 0.0);
`


//const DEFAULT_IMG ="https://image.tmdb.org/t/p/w185/3L05HQS4GiR8PXCq0JjqXShoLRF.jpg"
//No Image用の画像

const List =(props) => {
    //img→検索結果を表示
    //const poster =
     //props.img === "N/A" ? DEFAULT_IMG : props.img;
     const rating = () => {
        if (props.movies[props.id].vote_average !== 0) {
          return (
            <StyledRating>
              <StyledStarRoundedIcon />
              {props.movies[props.id].vote_average}
            </StyledRating>
          );
        }
      };
      const title =() =>{
          if (props.movies[props.id].title != null) {
              return (
                <StyledTitle>{props.movies[props.id].title}</StyledTitle> 
              )
          }
      }
      /*

      const handleListSubmit=() =>{
          this.props.history.push('/detail')
      }
     */
  
    return (
       //中央ぞろえ
       <Div style={{margin:'auto'}} className="movie"> 
           {/* <Grid container spacing={0}> */}
            {rating()}
            <Img 
                //  onClick={handleListSubmit}
                 src={imgUrl+props.movies[props.id].poster_path}
              //Detailsにリンク飛ぶように
              />
            
            {title()}
            {/* <p>{props.movies[props.id].title}</p>  */}
            {/* <p>{props.movies[props.id].release_date}</p>  */}
            {/* <p>{props.movies[props.id].overview}</p>  */}
            {/* </Grid> */}
            
        
            

        </Div>
    )
}

export default List
//export default withRouter(connect(mapStateToProps, map)(List))