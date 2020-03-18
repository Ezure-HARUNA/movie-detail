import React from "react"


    //styled-componentをインポート
    import styled from "styled-components"

    //material-UIをインポート
    //import { makeStyles } from '@material-ui/core/styles';
    //import TextareaAutosize from '@material-ui/core/TextareaAutosize';
    import Button from '@material-ui/core/Button';
    import SearchIcon from '@material-ui/icons/Search';
    import InputBase from '@material-ui/core/InputBase';
   

   

//➁コンポーネント
//検索フォームの背景変える(AppleBarの検索バーみたいにしたい)

const Form =styled.form`
 color: white;
    display: flex!important;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
}
input[type="text"] [
    background-color: white;
]

`
const StyledInputBase =styled(InputBase)`
color: white!important;
margin: 20px!important;
background-color:#4A638C;
opacity: 1;
border-radius: 20px;
width: 200px;
height:36px;
`



const StyledButton = styled(Button)`
    background: linear-gradient(45deg, blue 30%, #00a81c 90%);
    border-radius: 20px!important;
    border: 0;
    color: white;
    height:40px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    margin-top:-15px;
    cursor: pointer;
 `


const Search =(props) =>{
    //const [title, setTitle] =React.useState("")
    //const [overview, setOverview] =React.useState("")
    //const [img, setImg]=React.useState("")
    //const [year, setYear]=React.useState("")


    //const [ステート名、ステートの再定義関数名]= React.useState(ステートの初期値)
    const [searchValue, setSearchValue] = React.useState("");

    
    //ボタンが押されてsubmitした時に、検索処理を行う
    // ➀ボタンが押されたことを感知する
    const handleSearchSubmit =(e) =>{
        e.preventDefault()
        setSearchValue(e.target.value)
        /*

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=62df1d74f3375f28b7946846b540b1b9&language=ja-JP&query=${searchValue}&page=1&include_adult=false`)
            .catch(err=>{
                if (err) console.error(err)
            })
            .then(res=>res.json())

            .then(res=> {
                // setTitle(res.results[0].title)
                // setImg(res.results[0].poster_path)
                // setOverview(res.results[0].overview)
                // setYear(res.results[0].release_date)
                // console.log(setTitle)
                // console.log(setImg)
                // console.log(setOverview)
                // console.log(setYear)
    
            })
            */
        
            
            const resetInput =()=>{
                //➁入力範囲を空にする
                setSearchValue("")
            }
            // ➂検索機能の呼び出し
            
            props.search(searchValue)
            resetInput();
    }

   


    
     return (
        <Form align ="center" className="search">
            
            {/* <TextareaAutosize aria-label="empty textarea" placeholder="キーワードを入力" /> */}
            {/* <Button type="submit" variant="contained" color="primary" href=""> */}
               {/* 検索 */}
            {/* </Button> */}
            
 
            
              {/* <SearchIcon color="primary"/> */}
              <form onSubmit={(e)=>{handleSearchSubmit(e)}} className="searchInput"> 
                  {/* 定義と実行。returnでは定義の中に実行を入れる */}
                 <StyledInputBase defaultValue="" type="text" placeholder=" 入力してください"  inputProps={{ 'aria-label': 'search' }}/>
                 <StyledButton type="submit" variant="contained" color="primary" ><SearchIcon style={{ fontSize: 20 }} color="white"></SearchIcon>検索</StyledButton>
                 {/* title={title} setTitle={setTitle}  img={img} setImg={setImg} overview={overview} setOverview={setOverview} year={year} setYear={setYear} */}
              </form>
                 
            
            
              
              

            

                        
        </Form>
        
    )


}





export default Search
