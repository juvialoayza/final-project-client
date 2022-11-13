import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {createExperienceService} from '../services/experience.services'


function ExperienceCreate() {
  return (
    <div>
        <h3>Create new Experience</h3>
        <form>
            <label htmlFor="name">Experience Name:</label>
            {/* <input type="text" name="name" value={nameInput} onChange={nameChange} /> */}
            <br />
            <label htmlFor="category">Category:</label>
            <select name="category">
            <option value="">Choose category:</option>
            
            </select>
        </form>
    </div>
  )
}

export default ExperienceCreate