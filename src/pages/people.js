import React, {useState, useEffect, useCallback} from "react"
import NavBar from "../components/navbar";
import PeopleCard from "../components/PeopleCard"
import { client } from "../client";
import { useStaticQuery, graphql } from "gatsby"

// Temporary page created to house the people card information - Jacob

const container = {
    width: '60%',
}
const PeoplePage = () => {


  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //       allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "members"}}}}}) {
  //         edges {
  //           node {
  //             title
  //             content
  //           }
  //         }
  //       }
  //     }
      
  // `);

  // const arr = data.allWpPost.edges;

  // const cleanedArr = arr.map((unit) => {
  //   const { sys, node } = unit;
  //   const personName = node.title
  //   const personRole = node.content
  //   const cleaned = {personName, personRole}
  //   return cleaned;
  // })

  return (
    <div style={container}>
        <NavBar />
        <div>
        {/* Iterating and Creating each content card */}
            {/* {cleanedArr.map((item) => (
                <PeopleCard 
                    name={item.personName}
                    image={item.personImage}
                    role={item.personRole}
                />
            ))} */}
        </div>
    </div>
  )
}

// const PeoplePage = () => {

//     const[isLoading, setIsLoading] = useState(false)
//     const[people, setPeople] = useState([]);


//     // Cleaning up the Data Pulled from Contentful
//     const cleanUpPeople = useCallback((rawData) => {
//         const cleanPeople = rawData.map((people) => {
//             const {sys, fields} = people
//             const {id} = sys

//             const personName = fields.name
//             const personImage = fields.image
//             const personRole = fields.role

//             const cleaned = {id, personName, personImage, personRole}
//             return cleaned
//         })
//         setPeople(cleanPeople)
//     }, [])

//     // Fetching data from contentful
//     const getPeopleInfo = useCallback(async () => {
//         setIsLoading(true)
//         try {
//             const res = await client.getEntries({ content_type: 'members' })
//             const resData = res.items;
//             if (resData) {
//                 cleanUpPeople(resData)
//             } else {
//                 setPeople([])
//             }
//             setIsLoading(false)
//         } catch (error) {
//             console.log(error)
//             setIsLoading(false)
//         }
//     }, [cleanUpPeople])

//     useEffect(() => {
//         getPeopleInfo()
//     }, [getPeopleInfo])

//     console.log(people)

//   return (
//     <div style={container}>
//         <NavBar />
//         <div>
//         {/* Iterating and Creating each content card */}
//             {people.map((item) => (
//                 <PeopleCard 
//                     name={item.personName}
//                     image={item.personImage}
//                     role={item.personRole}
//                 />
//             ))}
//         </div>
//     </div>
//   )
// }

export default PeoplePage

export const Head = () => <title>People Test - Jacob</title>
