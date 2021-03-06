﻿import { Input, Switch, Icon, Select, Upload, message, Modal } from 'antd';
import UploadImg from 'components/form/uploadImg';
import Transfer from 'components/form/transfer';
import Selects from 'components/form/select';
import { FormItem } from 'components/dataView';
import * as React from 'react';
import lodash from 'lodash';
import Regular from 'utils/Regular';
import Store from '../store';

/**
 * label  标识
 * rules   校验规则，参考下方文档  https://ant.design/components/form-cn/#components-form-demo-validate-other
 * formItem  表单组件
 */
export default {
    /**
     * 表单模型 
     * @param props 
     */
    editModels(props?) {
        return {
            GroupCode:{
                label: "用户组编码",
                rules: [{ "required": true, "message": "用户组编码不能为空" }],
                formItem: <Input placeholder="请输入 用户组编码" />
            },
            GroupName:{
                label: "用户组名称",
                rules: [{ "required": true, "message": "用户组名称不能为空" }],
                formItem: <Input placeholder="请输入 用户组名称" />
            },
            GroupRemark:{
                label: "备注",
                rules: [],
                formItem: <Input placeholder="请输入 备注" />
            }

        }
    },
    /**
     * 搜索 模型 
     * @param props 
     */
    searchModels(props?) {
        return {
            GroupCode:{
                label: "用户组编码",
                rules: [],
                formItem: <Input placeholder="" />
            },
            GroupName:{
                label: "用户组名称",
                rules: [],
                formItem: <Input placeholder="" />
            },

        }
    },
    /**
     * 渲染 模型
     */
    renderModels(props?) {
        return lodash.map(props.models, (value, key) => {
            return <FormItem {...props} fieId={key} key={key} />
        })
    }
}