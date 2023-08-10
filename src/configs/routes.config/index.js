import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: React.lazy(() => import('views/Home')),
        authority: [],
    },
    /** Example purpose only, please remove */
    {
        key: 'marchandiseMenuItem',
        path: '/marchandise-list',
        component: React.lazy(() => import('views/Marchandise')),
        authority: [],
    },
    {
        key: 'marchandiseMenuItem',
        path: '/marchandise-new',
        component: React.lazy(() => import('views/Marchandise/MarchandiseNew')),
        authority: [],
    },
    {
        key: 'facturationMenuItem',
        path: '/facturation-list',
        component: React.lazy(() => import('views/Facturation')),
        authority: [],
    },
    {
        key: 'facturationSousMenuItem',
        path: '/facturation-new',
        component: React.lazy(() => import('views/Facturation/FacturationNew')),
        authority: [],
    },
    {
        key: 'inspectionMenuItem',
        path: '/inspection-list',
        component: React.lazy(() => import('views/Inspection')),
        authority: [],
    },
    {
        key: 'inspectionSousMenuItem',
        path: '/inspection-new',
        component: React.lazy(() => import('views/Inspection')),
        authority: [],
    },
    
    {
        key: 'collapseMenu.item1',
        path: '/exportateur',
        component: React.lazy(() => import('views/Exportateur')),
        authority: [],
    },
    {
        key: 'collapseMenu.item1',
        path: '/exportateur-new',
        component: React.lazy(() => import('views/Exportateur/ExportateurNew')),
        authority: [],
    },

    {
        key: 'collapseMenu.item2',
        path: '/importateur',
        component: React.lazy(() => import('views/Importateur')),
        authority: [],
    },
    {
        key: 'collapseMenu.item2',
        path: '/importateur-new',
        component: React.lazy(() => import('views/Importateur/ImportateurNew')),
        authority: [],
    },

    {
        key: 'collapseMenu.item3',
        path: '/marque',
        component: React.lazy(() => import('views/Marque')),
        authority: [],
    },{
        key: 'collapseMenu.item3',
        path: '/marque-new',
        component: React.lazy(() => import('views/Marque/MarqueNew')),
        authority: [],
    },

    {
        key: 'collapseMenu.item4',
        path: '/client-final',
        component: React.lazy(() => import('views/ClientFinal')),
        authority: [],
    },
    {
        key: 'collapseMenu.item4',
        path: '/client-final-new',
        component: React.lazy(() => import('views/ClientFinal/ClientFinalNew')),
        authority: [],
    },

    {
        key: 'collapseMenu.item5',
        path: '/modele',
        component: React.lazy(() => import('views/Modele')),
        authority: [],
    },
    {
        key: 'collapseMenu.item5',
        path: '/modele-new',
        component: React.lazy(() => import('views/Modele/ModeleNew')),
        authority: [],
    },

    {
        key: 'collapseMenu.item6',
        path: '/operateur',
        component: React.lazy(() => import('views/Operateur')),
        authority: [],
    },
    {
        key: 'collapseMenu.item6',
        path: '/operateur-new',
        component: React.lazy(() => import('views/Operateur/OperateurNew')),
        authority: [],
    },

    {
        key: 'collapseMenu.item7',
        path: '/pays',
        component: React.lazy(() => import('views/Pays')),
        authority: [],
    },
    {
        key: 'collapseMenu.item7',
        path: '/pays-new',
        component: React.lazy(() => import('views/Pays/PaysNew')),
        authority: [],
    },


    /*{
        key: 'groupMenu.single',
        path: '/group-single-menu-item-view',
        component: React.lazy(() =>
            import('views/demo/GroupSingleMenuItemView')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item1',
        path: '/group-collapse-menu-item-view-1',
        component: React.lazy(() =>
            import('views/demo/GroupCollapseMenuItemView1')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item2',
        path: '/group-collapse-menu-item-view-2',
        component: React.lazy(() =>
            import('views/demo/GroupCollapseMenuItemView2')
        ),
        authority: [],
    }, */
]
