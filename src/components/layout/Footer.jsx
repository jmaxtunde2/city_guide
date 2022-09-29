import React from 'react'

const Footer = () => {
  return (
    <div className="main-footer">
        <div className="container">
            <div className="row">
                {/* Colum 1 */}
                <div className="col-md-3 col-sm-4">
                    <h4 className='text-white'>Lorem ipsum dolor sit amet</h4>
                    <ul className='list-unstyled'>
                        <li>Lorem new</li>
                        <li>Lorem new</li>
                        <li>Lorem new</li>
                        <li>Lorem new</li>
                    </ul>
                </div>
                {/* Colum 2 */}
                <div className="col-md-3 col-sm-4">
                    <h4 className='text-white'>Lorem ipsum dolor sit amet</h4>
                    <ul className='list-unstyled'>
                        <li>Lorem new</li>
                        <li>Lorem new</li>
                        <li>Lorem new</li>
                        <li>Lorem new</li>
                    </ul>
                </div>
                {/* Colum 3 */}
                <div className="col-md-3 col-sm-4">
                    <h4 className='text-white'>Lorem ipsum dolor sit amet</h4>
                    <ul className='list-unstyled'>
                        <li>Lorem new</li>
                        <li>Lorem new</li>
                        <li>Lorem new</li>
                        <li>Lorem new</li>
                    </ul>
                </div>

                {/* Colum 4 */}
                <div className="col-md-3 col-sm-4">
                    <h4 className='text-white'>Lorem ipsum dolor sit amet</h4>
                    <ul className='list-unstyled'>
                        <li>Lorem new</li>
                        <li>Lorem new</li>
                        <li>Lorem new</li>
                        <li>Lorem new</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="text-center">
                    &copy;{new Date().getFullYear()} TechLab - All rights Reserved 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer;