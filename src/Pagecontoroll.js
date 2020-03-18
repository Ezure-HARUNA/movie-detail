//➀インポート
import React from "react";
import styled from "styled-components"

    //マテリアルUIのインポート
import Pagination from '@material-ui/lab/Pagination'

const StyledPagination=styled(Pagination)`
z-index:100!important;

`

//➁コンポーネント
const PageContoroll =() => {

        //➂レンダリング
        return (
            //中央ぞろえ
           <div style={{margin:'auto',width:'50%'}}> 
               <StyledPagination  count={10}  />
           </div>
        )

}

//➃エクスポート
export default PageContoroll


