import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { colors } from '../utils/colors'
import { Box, Button, Typography } from '@mui/material'
import goBackIcon from '../assets/gobackbtn.svg'
import editIcon from '../assets/edit.svg'
import { useNavigate } from 'react-router-dom'
import TextAreaRating from '../components/TextAreaRating'
import textAreaRatingIcon from '../assets/textarea_icon.svg'
import startRatingIcon from '../assets/star_icon.svg'
import numericRatingIcon from '../assets/numerical_icon.svg';
import smilyRatingIcon from '../assets/smiley_icon.svg';
import singleLineRatingIcon from '../assets/input_icon.svg'
import radioTypeRatingIcon from '../assets/radio_icon.svg';
import categoriesRatingIcon from '../assets/cate_icon.svg';
import addIcon from '../assets/+.svg'
const Form = () => {
  const options = [
    { label: 'Save', action: () => console.log('saved'), bg: colors.teritory },
    { label: 'Publish', action: () => console.log('published'), bg: colors.success }
  ]

  const lists = [
    { title: "TextArea", icon: textAreaRatingIcon },
    { title: 'Numeric rating', icon: numericRatingIcon },
    { title: 'Star rating', icon: startRatingIcon },
    { title: 'Smiley rating', icon: smilyRatingIcon },
    { title: 'Single line input', icon: singleLineRatingIcon },
    { title: "Radio button", icon: radioTypeRatingIcon },
    { title: 'Categories', icon: categoriesRatingIcon }
  ];

  const [ratingTypes, setRatingTypes] = useState<string[]>([])
  const [formName, setFormName] = useState<string>('')
  const navigate = useNavigate()

  const handleRatingTypes = (ratingType: string) => {
    setRatingTypes((prev) => ([...prev, ratingType]))
  }
  useEffect(() => {
    const name = localStorage.getItem('formName') || "";
    setFormName(name)
  }, [])


  return (
    <>
      <Navbar logo='https://s3-alpha-sig.figma.com/img/2293/4848/b251a693f86366116521344341649e62?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H7nJnv1OJcL3mofKF0QXGm~KTd8rgWIXBkMoG7t1BuP6oQie45D5aOq3V0Jb8FwjDnjUVZM57cU0CDce1WWr1olP7ywjTiyGUvL9QTA8knWzXq5IVdPZeyUolCUKZ9Uz9ji3PmzDCas~vPNOUkbnP1xQe8gD0nrD3YGMm2fLFY5m9eVj0MgZBLimwtI4yjV8UnGixCLVhcyYdyx2o-6FXJP2qCpNcZQkQnI6D8-UWTClpW8N23NtJtDa2IruKkT37OuGQ6Y8QqijHrZLOKpy~E12szSlXr0i0LODeUhGhtSAROGFnIA0ZPZ~9NK5WJoi2707MgiRNmSHjqAZKmIjfg__' title='User Feedback' options={options} />
      <Box display={'flex'} width={'99.8%'} sx={{ height: 'calc(100vh - 80px)' }}>
        <Box height={"100%"} width={"85%"} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box height={'500px'} width={'30%'} mt={3} boxShadow={10} borderRadius={3}>
            <Box bgcolor={'rgba(85, 120, 244, 1)'} display={'flex'} py={2} px={1} borderRadius={'8px 8px 0px 0px'}>
              <img src={goBackIcon} alt="goBack" width={24} onClick={() => navigate(-1)} />
              <Typography color={'white'} fontSize={18} mr={0.5}>{formName}</Typography>
              <img src={editIcon} alt="edit" width={18} />
            </Box>
            {ratingTypes.length > 0 ? <Box>
              {ratingTypes.map((type) => (
                <Typography>{type}</Typography>
              ))}
            </Box> : <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ height: 'calc(500px - 60px)' }}>
              <Typography fontSize={24} fontWeight={'bold'} color={'grey'}>Add Feilds</Typography>
            </Box>}
          </Box>
        </Box>
        <Box boxShadow={10} height={"100%"} width={"15%"} px={2}>
          <Typography fontSize={18} fontWeight={'bold'} textAlign={'left'} mt={2}>Add Feilds</Typography>
          <Box display={'flex'} flexDirection={'column'} gap={2} mt={1}>
            {lists.map((list, index) => (
              <Box key={index} display={'flex'} justifyContent={'space-between'} alignItems={'center'}  >
                <Box display={'flex'} gap={1} alignItems={'center'}>
                  <img src={list.icon} alt={list.title} width={20} />
                  <Typography>{list.title}</Typography>
                </Box>
                <Button sx={{ width: 'fit-content', padding: 0, margin: 0 }} onClick={() => handleRatingTypes(list.title)} disabled={ratingTypes.length > 7}>
                  <img src={addIcon} alt="add" width={15} />
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Form