import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import { router } from '../../router';
import './index.scss';
function Contents() {
    return (
        <>
            <div className="mains">
                <Suspense fallback={<h2>loading</h2>}>
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        {/* {router[3].children.map((item, index) => {
                            return (
                                <Route
                                    exact
                                    path={item.key}
                                    key={index}
                                    element={<item.component />}
                                ></Route>
                            );
                        })} */}
                        {router.map((item, index) => {
                            if (item.children && item.children.length > 0) {
                                return item.children.map((Item, i) => {
                                    return (
                                        <Route
                                            exact
                                            path={Item.key}
                                            key={i}
                                            element={<Item.component />}
                                        ></Route>
                                    );
                                });
                            } else {
                                return (
                                    <Route
                                        exact
                                        path={item.key}
                                        key={index}
                                        element={<item.component />}
                                    ></Route>
                                );
                            }
                        })}
                        {/* {router.map((item, index) => {
                            return item.children && item.children.length > 0 ? (
                                item.children.map((Item, i) => {
                                    return (
                                        <Route
                                            exact
                                            path={Item.key}
                                            key={i}
                                            element={<Item.component />}
                                        ></Route>
                                    );
                                })
                            ) : (
                                <Route
                                    exact
                                    path={item.key}
                                    key={index}
                                    element={<item.component />}
                                ></Route>
                            );
                        })} */}
                        {/* {router.map((item, index) => {
                            item.children && item.children.length > 0 ? (
                                item.children.map((Item, i) => {
                                    return (
                                        <Route
                                            path={Item.key}
                                            key={i}
                                            element={<Item.component />}
                                        ></Route>
                                    );
                                })
                            ) : (
                                <Route
                                    exact
                                    path={item.key}
                                    key={index}
                                    element={<item.component />}
                                ></Route>
                            );
                        })} */}
                    </Routes>
                </Suspense>
            </div>
        </>
    );
}
export default Contents;
