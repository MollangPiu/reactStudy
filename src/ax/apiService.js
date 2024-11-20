import api from './axSetting';

export const areaList = () => {
    return api.get('area/list');
}

export const areaRegist = (obj) => {
    return api.post('area/regist', JSON.stringify(obj));
}