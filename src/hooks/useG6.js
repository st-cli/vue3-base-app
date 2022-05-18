import G6 from '@antv/g6';
import {
    onMounted
} from 'vue';

// G6.registerNode('circle-image-node',{

// })

export function useG6(Dom, data) {

    let graph;

    onMounted(() => {
        //宽度
        const width = document.getElementById(Dom).scrollWidth;
        //高度
        const height = document.getElementById(Dom).scrollHeight || 500;
        //图的实例
        graph = new G6.Graph({
            container: Dom,
            width,
            height,
        });
        graph.data(data)

        graph.render()
    })




    return {
        graph,
        G6
    }
}