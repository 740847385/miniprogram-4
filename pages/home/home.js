// pages/home.js 

import {
    Theme
} from "../../model/theme"

import {Banner} from "../../model/banner"
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        grid: [],
        activityD: null,
        themeE: null

    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad() {
        this.initAllData()

    },
    async initAllData() {

        const theme = new Theme();
        await theme.getThemes()
        const bannerB = await Banner.getHomeLocationB()


        const themeA = await theme.getHomeLocationA()
        const themeE = await theme.getHomeLocationE()
        const grid = await Category.getGridCategory()
        const activityD = await Activity.getHomeLocationD()
        console.log(themeA)
        this.setData({
            themeA,
            bannerB,
            grid,
            activityD,
            themeE
        })
    },


    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})
