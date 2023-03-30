import React, { useRef } from 'react';
import styled from 'styled-components';
import Footer from './Footer';


export default function Soil() {
    const ref1 = useRef();
   
        window.scrollTo(0,0)
    
   const  handleShow=(i)=>{
    if(document.getElementById(i).style.display === "block"){
        document.getElementById(i).style.display = "none";
        document.getElementById(`b${i}`).innerText = "+";
    }else{

        document.getElementById(i).style.display = "block";
        document.getElementById(`b${i}`).innerText = "-";
 
    }
     
   }
  return (
    <Box>
       <div className="article">
        <h1>Soil Pollution</h1>
            <div className="top__soil">
                <div className="top__text">
               <p>Soil acts as a filter for contaminants but its buffering capacity is finite</p>
                </div>
            </div>
            <h3 style={{margin:"1rem"}}>Soil pollution, drivers and impacts</h3>
            <div className="definition">
                <div className="head" onClick={()=>{handleShow(1)}}>
                 <span> What is Soil Pollution?</span>
                 <span  id="b1">+</span>
                </div>
                <div className="head__content" ref={ref1} id="1">
                Soil pollution implies the presence of chemicals and materials in soil that have a significant adverse effect on any organisms or soil functions. Soil pollutants include inorganic and organic compounds, some organic wastes and the so-called “chemicals of emerging concern”. Soil pollution has a direct impact on food security and there is a direct link between the quality and safety of the food we eat and the level of soil contaminants. Additionally, soil pollution affects food availability by reducing crop yields due to toxic levels of contaminants that hamper crop growth and reduce soil biodiversity, thus increasing the problem of food security.
                </div>
                <div className="head" onClick={()=>{handleShow(2)}}>
                 <span>What are the impacts of soil pollution?</span>
                 <span  id="b2">+</span>
                </div>
                <div className="head__content" ref={ref1} id="2">
                Soil acts as a filter and buffer for contaminants, but its potential to cope is finite. If the capacity of the soil to mitigate the effects of contaminants is exceeded, the soil turns into a time bomb that can pollute other compartments of the environment. Soil pollution also triggers a chain of soil degradation processes, starting from the loss of soil biodiversity, the reduction of soil organic carbon, to the destruction of soil structure and the increase of soil erodibility. Contaminants can leach into groundwater or become available for plant uptake and entry into the food chain. Contaminants accumulate in plant tissues and soil organisms, passing to grazing animals, birds, or to humans that consume them. Many contaminants become more concentrated as they rise up the food chain, increasing the potential for harm to human health.
                </div>
                <div className="head" onClick={()=>{handleShow(3)}}>
                 <span> What can you do?</span>
                 <span  id="b3">+</span>
                </div>
                <div className="head__content" ref={ref1} id="3">
                Combatting soil pollution requires a sustained effort to prevent further issues and to mitigate existing pollution. Promoting sustainable agricultural practices, asking governments to develop policies to reduce the use of harmful chemicals and to prevent and control soil pollution are actions that can be taken now. The Voluntary Guidelines for Sustainable Soil Management include integrated pest management as an important best practice. The International Code of Conduct on Pesticide Management and the International Code of Conduct on the Sustainable Use and Management of Fertilizers provide internationally recognized standards for the safe and judicious use of pesticides and fertilizers.
                </div>
            </div>
            <h3 style={{margin:"1rem"}}>Latest Stories</h3>
            <div className="stories">
                <div className="story">
                    <img src="https://www.fao.org/fileadmin/templates/medium/images/cover/medium_0292469f736f60f4f4f5a7ad37513057.jpg" alt="soil" />
                    <h6>Polluting our soils is polluting our future</h6>
                    <span>Soil is a finite resource, meaning its loss and degradation is not recoverable within a human lifespan. Soils affect the food we eat, the water we drink, the air we breathe, our health and the health of all organisms on the planet.</span>
                     <a href="https://www.fao.org/fao-stories/article/en/c/1126974/" target="_parent"><button>Learn More</button></a>
                </div>
                <div className="story">
                    <img src="https://www.fao.org/typo3temp/pics/41b26f2fb7.jpg" alt="soil" />
                    <h6>Report sounds alarm on soil pollution</h6>
                    <span>Industrialization, war, mining and the intensification of agriculture have all left a legacy of soil contamination across the planet, while the growth of cities has seen soil used as a sink for ever greater amounts of municipal waste, says Soil Pollution: A Hidden Reality.</span>
                   
                     <a href="https://www.fao.org/news/story/en/item/1126971/icode/" target="_parent"><button>Learn More</button></a>
                </div>
            </div>
            <h3 style={{margin:"1rem"}}>In action</h3>
            <div className="stories">
                <div className="story">
                    <img src="https://www.fao.org/fileadmin/user_upload/GSP/Areas_of_Work/pollution/00.jpg" alt="soil" />
                    <h6>Symposium on Soil Pollution</h6>
                    <span className='extra'>2-4 May 2018, FAO headquarters</span>
                    <span>The Symposium was attended by more than 500 participants from 100 countries, including member states, academia, private sector as well as scientists and land users working on soil pollution and related fields.</span>
                     <a href="https://www.fao.org/about/meetings/global-symposium-on-soil-pollution/en/" target="_parent"><button>Learn More</button></a>
                </div>
                <div className="story">
                    <img src="https://www.fao.org/fileadmin/user_upload/GSP/Areas_of_Work/pollution/000.jpg" alt="soil" />
                    <h6>Plan of action</h6>
                    <span className="extra">Outcome document of the Symposium</span>
                    <span> The Symposium Outcome document support policies and actions that enhance the prevention, minimization and remediation of soil pollution through the promotion of sustainable soil management.</span>
                   
                     <a href="https://www.fao.org/global-soil-partnership/intergovernmental-technical-panel-soils/gsop18-implementation/en/" target="_parent"><button>Learn More</button></a>
                </div>
                <div className="story">
                    <img src="https://www.fao.org/fileadmin/user_upload/GSP/Areas_of_Work/pollution/0000.jpg" alt="soil" />
                    <h6>Be the solution to soil pollution</h6>
                    <span className="extra">World Soil Day, 5 Dec 2018</span>
                    <span>The campaign 'Be the solution to soil pollution' drew attention on the global issue of soil pollution and the urgent need to increase collective efforts to improve food safety, human health and ecosystem services.</span>
                   
                     <a href="https://www.fao.org/world-soil-day/about-wsd/wsd-2018/campaign-materials/en/" target="_parent"><button>Learn More</button></a>
                </div>
            </div>
            <h3 style={{margin:"1rem"}}>Webinars and questionnaires</h3>
            <div className="stories">
                <div className="story">
                    <img src="https://www.fao.org/fileadmin/user_upload/GSP/Areas_of_Work/pollution/GSP_INSOP-400x250.jpg" alt="soil" />
                    <h6>Launch of INSOP</h6>
                    <span className='extra'>Network of Soil Pollution | 22 April 2022</span>
                   
                     <a href="https://www.fao.org/global-soil-partnership/resources/highlights/detail/en/c/1477522/" target="_parent"><button>Learn More</button></a>
                </div>
                <div className="story">
                    <img src="https://www.fao.org/fileadmin/user_upload/GSP/Areas_of_Work/pollution/INSOP-Survey_400x250.jpg" alt="soil" />
                    <h6>Fill out the survey</h6>
                    <span className="extra">Join INSOP Technical Network</span>
                    
                     <a href="https://www.surveymonkey.com/r/7N2QVHS" target="_parent"><button>Learn More</button></a>
                </div>
                <div className="story">
                    <img src="https://www.fao.org/fileadmin/user_upload/GSP/Areas_of_Work/pollution/TZP-400x250.jpg" alt="soil" />
                    <h6>Be the solution to soil pollution</h6>
                    <span className="extra">4 June 2021, online</span>
                   
                   
                     <a href="https://www.fao.org/global-soil-partnership/areas-of-work/soil-pollution/webinar-towards-zero-pollution-4-jun-2021/en/" target="_parent"><button>Learn More</button></a>
                </div>
            </div>
            <hr />
            <a href="https://www.fao.org/global-soil-partnership/insop/en/" style={{marginLeft:"8px",textDecoration:"none"}}>Discover more on soil pollution!</a>


       </div>
       <Footer/>
    </Box>

  )
}

const Box = styled.div`
.article{
    padding-bottom: 1rem;
    margin: auto;
    height: 100%;
    width: 80%; 
    background-color: white;
    box-shadow: 1px 1px 5px 5px rgb(161, 163, 164);
    h1{
        padding: 1rem;
        font-weight: 400;
    }
   .top__soil{
    height: 450px;
    width: 100%;
    background: url('https://www.fao.org/typo3temp/pics/0f67c9042a.jpg');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    align-items: end;
     display: flex;
    .top__text{
        padding:0 4rem 0 4rem;
        background-color: #535151;
        opacity: 0.8;
         margin-bottom: 1rem;

        p{
            color: white;
            font-weight: 900;
            font-size: 2rem;

        }
    }
   }
   .definition{
    margin: 1rem;
    .head{
        cursor: pointer;
        padding: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3rem;
        background-color: #b3b1b1;
    }
    .head:hover{
        background-color: #dcd9d9;

    }
        .head__content{
            text-align: justify;
            font-size: smaller;
            display: none;
            transition: 3s ease-in-out;
    }
   }
   .stories{
       height: 100%;
       margin-left: 1rem;
       margin-right: 1rem;
       display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2rem;
    text-align: justify;
    .story{
        box-shadow: 1px 1px 5px 5px rgb(161, 163, 164);
        max-width: 300px;
       
        height: 100%;
        padding-bottom: 0.5rem;
        img{
            min-width: inherit;
            width: 100%;
            height: 50%;
        }
        h6{
            margin: 0.3rem;
        }
        .extra{
            font-weight: 400;
            color: #b3b1b1;
            margin: 8px;
        }
        span{
            display: block;
            margin: 0.3rem;
            font-size: smaller;
            
        }
       button{
        padding: 2px;
        float: right;
        margin-right: 6px;
       }
       button:hover{
        background-color: #b3b1b1;
       }
    }
   }
}
@media screen and (max-width: 768px){
   
    .article{
        width: 100%;
        .top__soil{
            height: 200px;
            .top__text{
                
                padding:1rem 1rem 0 1rem;
                p{
                     font-weight: 500;
                    font-size: 12px;
                }

            }
        }
    }
    .stories{
        justify-content: center;
        margin: 0;
        .story{
            min-width: 100%;
        }
        
       
    }
}
`;