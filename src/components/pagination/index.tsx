import React, { Fragment, useState, useEffect, ReactNode } from "react"
import {
  AppBar,
  Toolbar,
  Button,
  CircularProgress,
  Box,
} from "@material-ui/core"
import { Pagination as MUI_Pagination } from "@material-ui/lab"
import axios from "axios"

export interface PostsInterface {
  userId: number
  id: number
  title: string
  body: string
}

export const Pagination = () => {
  const [posts, setPosts] = useState<PostsInterface[]>([])
  const [page, setPage] = React.useState(1)
  const [loading, setLoading] = useState(true)

  const handleChange = (event, value) => {
    setPage(value)
  }

  const handlePosts = async () => {
    try {
      const serverResponse = await axios({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "GET",
      })
      console.log(serverResponse.data)
      setPosts(serverResponse.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      handlePosts()
    }, 3000)
  }, [])

  return (
    <Fragment>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <Fragment>
          {posts.slice((page - 1) * 10, page * 10).map(post => {
            const { title, id } = post
            return (
              <Fragment key={id}>
                <p>{title}</p>
              </Fragment>
            )
          })}
          <MUI_Pagination
            showFirstButton
            showLastButton
            color="primary"
            count={posts.length / 10}
            page={page}
            onChange={handleChange}
          />
        </Fragment>
      )}
    </Fragment>
  )
}
