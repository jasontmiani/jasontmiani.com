/*import React, {useEffect, useState} from "react";
import { useStaticQuery, graphql } from "gatsby";
import axios from 'axios';

//TODO: Add param {...config} for Filters and Sorting of stuffs

/* 
	sortMethod = {
		oldestCreatedTime,
		newestCreatedTime,
		oldestUpdatedTime,
		newestUpdatedTime
		
	}
	filter = {
		album,
		tags,
		event,
		location,
		type
	} */



/*
axios.get(
	{
		url: "https://graph.facebook.com",
		path: "/me",
		data: {
		accessToken: `${process.env.INSTAGRAM_ACCESS_TOKEN}`, 
		fields: `id,name,photos.limit(20){id,icon,picture,place,link,name,alt_text_custom,alt_text,width,height,created_time,event,images,updated_time,album,name_tags,target},music`
	},
	callback: {
		validateStatus: {
			success: res => console.log(res.data),
			error: err => console.error(err)
		}}}
	
	).then(res => console.log(res)).catch(err => console.error(err))


/* FB.api(
	'/me',
	'GET',
	{"fields":"id,name,photos{id,icon,picture,place,link,name,alt_text_custom,alt_text,width,height,created_time,event,images,updated_time,album,name_tags,likes{username}}"},
	function(response) {
		// Insert your code here
	}
  ); */