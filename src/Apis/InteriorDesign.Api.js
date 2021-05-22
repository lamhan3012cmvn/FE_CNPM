/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"

const url = "interiorDesign/"
const getAllInteriorDesign = async () => {
  try {
    const res = await axiosClient.get(`${url}getInteriorDesign`)
    console.log(
      `LHA:  ===> file: InteriorDesign.Api.js ===> line 8 ===> res`,
      res
    )
    if (res) {
      return {
        success: true,
        data: res
      }
    }
    return {
      success: false,
      data: []
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      data: []
    }
  }
}

const getAllInteriorDesignDetail = async id => {
  try {
    const res = await axiosClient.get(`${url}getInteriorDesignDetail/${id}`)

    if (res) {
      return {
        success: true,
        data: res.data
      }
    }
    return {
      success: false,
      data: {}
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      data: {}
    }
  }
}

const getAllInteriorDesignByType = async idInteriorDesign => {
  console.log(
    `LHA:  ===> file: InteriorDesign.Api.js ===> line 58 ===> idInteriorDesign`,
    idInteriorDesign
  )
  try {
    const res = await axiosClient.get(`${url}getInteriorDesignByType`, {
      params: { idInteriorDesign: idInteriorDesign }
    })
    console.log(
      `LHA:  ===> file: InteriorDesign.Api.js ===> line 8 ===> res`,
      res
    )
    if (res) {
      return {
        success: true,
        data: res.data
      }
    }
    return {
      success: false,
      data: []
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      data: []
    }
  }
}

const InteriorDesignAPi = {
  getAllInteriorDesign,
  getAllInteriorDesignDetail,
  getAllInteriorDesignByType
}

export default InteriorDesignAPi
