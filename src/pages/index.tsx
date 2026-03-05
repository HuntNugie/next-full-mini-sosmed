export default function HomePage(){
  return null
}

export function getServerSideProps(){
  return {
    redirect:{
      destination:"/login",
      permanent:true,
    }
  }
}