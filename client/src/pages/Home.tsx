import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Button } from '@mui/material'
import plus from '../assets/plus-large-svgrepo-com 1.svg'
import { CreateFromModal } from '../components/CreateFromModal'
import FormCard from '../components/FormCard'


const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Navbar logo={"https://s3-alpha-sig.figma.com/img/2293/4848/b251a693f86366116521344341649e62?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H7nJnv1OJcL3mofKF0QXGm~KTd8rgWIXBkMoG7t1BuP6oQie45D5aOq3V0Jb8FwjDnjUVZM57cU0CDce1WWr1olP7ywjTiyGUvL9QTA8knWzXq5IVdPZeyUolCUKZ9Uz9ji3PmzDCas~vPNOUkbnP1xQe8gD0nrD3YGMm2fLFY5m9eVj0MgZBLimwtI4yjV8UnGixCLVhcyYdyx2o-6FXJP2qCpNcZQkQnI6D8-UWTClpW8N23NtJtDa2IruKkT37OuGQ6Y8QqijHrZLOKpy~E12szSlXr0i0LODeUhGhtSAROGFnIA0ZPZ~9NK5WJoi2707MgiRNmSHjqAZKmIjfg__"} title="User Feedback" />

      <Box display={'flex'} flexWrap={'wrap'} p={4} gap={3}>
        <Button onClick={handleOpen} sx={{ textTransform: 'none', borderRadius: 2,padding:'0px' }}>
          <Box width={250} height={300} display={'flex'} justifyContent={'center'} alignItems={'center'} boxShadow={5} borderRadius={2} >
            <Box >
              <img src={plus} alt="plus_logo" width={100} />
              <h3>New Form</h3>
            </Box>
          </Box>
        </Button>
        <FormCard/>
      </Box>
      <CreateFromModal isOpen={open} onClose={handleClose} />
    </>
  )
}

export default Home