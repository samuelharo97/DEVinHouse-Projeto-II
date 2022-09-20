import React, { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import PropTypes from 'prop-types'
import {
  Background,
  CloseModalButton,
  InputContainer,
  InputWrapper,
  ModalContent,
  ModalImg,
  ModalWrapper
} from './styles'
import { Button } from '@components'

export const ModalTest = ({
  showModal,
  setShowModal,
  device,
  handleAdd,
  locations
}) => {
  const modalRef = useRef()
  console.log('oi')
  /* const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  }) */

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          {/* <animated.div style={animation}> */}
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <h3>{device.name}</h3>
              <InputContainer>
                <InputWrapper>
                  <label htmlFor="local">Local*</label>
                  <select
                    name="local"
                    id="local"
                    placeholder="Selecione o local"
                  >
                    {locations.map((location, index) => {
                      return (
                        <option key={index} value={`${location._id}`}>
                          {location.description}
                        </option>
                      )
                    })}
                  </select>
                </InputWrapper>
              </InputContainer>

              <div>
                <Button
                  title={'CONFIRMAR'}
                  func={handleAdd}
                  color={'primary'}
                />
                <Button
                  title={'CANCELAR'}
                  func={setShowModal}
                  color={'secondary'}
                />
              </div>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal(prev => !prev)}
            />
          </ModalWrapper>
          {/* </animated.div> */}
        </Background>
      ) : null}
    </>
  )
}

ModalTest.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  handleAdd: PropTypes.func,
  locations: PropTypes.array,
  device: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
}
