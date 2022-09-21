import React from 'react'
import Post from './Post'

function Posts() {
    const posts = [
        {
            userName: "shawon",
            id:1,
            profileImg: "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/293811156_2979163599040644_4805801626612246004_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=kwsjEcjj6FsAX-_26EC&tn=6dbdz11tw1Stp6mH&_nc_ht=scontent.fdac148-1.fna&oh=00_AT8o1cyfSiYhFCBkrga8QYs_xzoJ97lrqvZaUMBSZ3ehkQ&oe=632FB95B",
            postImg: "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/293811156_2979163599040644_4805801626612246004_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=kwsjEcjj6FsAX-_26EC&tn=6dbdz11tw1Stp6mH&_nc_ht=scontent.fdac148-1.fna&oh=00_AT8o1cyfSiYhFCBkrga8QYs_xzoJ97lrqvZaUMBSZ3ehkQ&oe=632FB95B",
            
        },
        {
            userName: "shawon",
            id: 2,
            profileImg: "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/293811156_2979163599040644_4805801626612246004_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=kwsjEcjj6FsAX-_26EC&tn=6dbdz11tw1Stp6mH&_nc_ht=scontent.fdac148-1.fna&oh=00_AT8o1cyfSiYhFCBkrga8QYs_xzoJ97lrqvZaUMBSZ3ehkQ&oe=632FB95B",
            postImg: "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/293811156_2979163599040644_4805801626612246004_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=kwsjEcjj6FsAX-_26EC&tn=6dbdz11tw1Stp6mH&_nc_ht=scontent.fdac148-1.fna&oh=00_AT8o1cyfSiYhFCBkrga8QYs_xzoJ97lrqvZaUMBSZ3ehkQ&oe=632FB95B",

        },
        {
            userName: "shawon",
            id: 3,
            profileImg: "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/289283873_2958488461108158_6945804398433313990_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFqiRl3ifIsAoJogMn5AT7chD5NDb_Pk6OEPk0Nv8-To8Ltj8tUA0sF_N3MZmuOzMtWkIPvZIZ63aMqgpQaaB8P&_nc_ohc=HK-D0ZeWIioAX-rBWrI&tn=6dbdz11tw1Stp6mH&_nc_ht=scontent.fdac148-1.fna&oh=00_AT8lUIp4xZ7_c5HXDU6ZHkfrGdcHvnQGsrn3fp34JrbOvg&oe=632E21E6",
            postImg: "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/289283873_2958488461108158_6945804398433313990_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFqiRl3ifIsAoJogMn5AT7chD5NDb_Pk6OEPk0Nv8-To8Ltj8tUA0sF_N3MZmuOzMtWkIPvZIZ63aMqgpQaaB8P&_nc_ohc=HK-D0ZeWIioAX-rBWrI&tn=6dbdz11tw1Stp6mH&_nc_ht=scontent.fdac148-1.fna&oh=00_AT8lUIp4xZ7_c5HXDU6ZHkfrGdcHvnQGsrn3fp34JrbOvg&oe=632E21E6",

        },
        {
            userName: "shawon",
            id: 4,
            profileImg: "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/289283873_2958488461108158_6945804398433313990_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFqiRl3ifIsAoJogMn5AT7chD5NDb_Pk6OEPk0Nv8-To8Ltj8tUA0sF_N3MZmuOzMtWkIPvZIZ63aMqgpQaaB8P&_nc_ohc=HK-D0ZeWIioAX-rBWrI&tn=6dbdz11tw1Stp6mH&_nc_ht=scontent.fdac148-1.fna&oh=00_AT8lUIp4xZ7_c5HXDU6ZHkfrGdcHvnQGsrn3fp34JrbOvg&oe=632E21E6",
            postImg: "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/289283873_2958488461108158_6945804398433313990_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFqiRl3ifIsAoJogMn5AT7chD5NDb_Pk6OEPk0Nv8-To8Ltj8tUA0sF_N3MZmuOzMtWkIPvZIZ63aMqgpQaaB8P&_nc_ohc=HK-D0ZeWIioAX-rBWrI&tn=6dbdz11tw1Stp6mH&_nc_ht=scontent.fdac148-1.fna&oh=00_AT8lUIp4xZ7_c5HXDU6ZHkfrGdcHvnQGsrn3fp34JrbOvg&oe=632E21E6",

        },
    ]
  return (
      <div>
          {
              posts.map(post => <Post key={post.id} post={post}></Post>)
          }
    </div>
  )
}

export default Posts