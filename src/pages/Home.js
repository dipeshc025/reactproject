import React from 'react'
import MovieCard from '../components/MovieCard'

const Home = () => {
  return (
    <div>
      <MovieCard title='Avatar' image="https://images.unsplash.com/photo-1719582868977-9633f6e91a91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" para='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ratione illo asperiores reiciendis ex nisi aut tempore atque eum? At ipsam laboriosam porro, suscipit pariatur ipsa et dolorem, sapiente ea iusto aliquid, blanditiis exercitationem placeat sed. Sapiente, in ratione maiores optio pariatur ea vero, odit inventore harum delectus temporibus fugiat.' />
      <MovieCard title='Avanger' image='https://images.unsplash.com/photo-1719352354062-0a35d9db5773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D' para='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ratione illo asperiores reiciendis ex nisi aut tempore atque eum? At ipsam laboriosam porro, suscipit pariatur ipsa et dolorem,' />
      <MovieCard title='Owl' image='https://images.unsplash.com/photo-1719437492381-390a334e5722?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D' para='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ratione illo asperiores reiciendis ex nisi aut tempore atque eum? At ipsam laboriosam porro,'/>
      <MovieCard title='Building' image='https://images.unsplash.com/photo-1719597283185-8ae056644dd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D' para='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ratione illo asperiores reiciendis ex nisi aut tempore atque eum?'/>
    </div>
  )
}

export default Home