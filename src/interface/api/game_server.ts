import { URL, RequestResponse } from '../../types/url';

export interface Game_Server {
    '/services/{id}/gameservers': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    gameserver: {
                        must_be_started: boolean;
                        status: string;
                        websocket_token: string;
                        hostsystems: Record<
                            'linux' | 'windows',
                            Record<string, unknown>
                        >;
                        username: string;
                        managed_root: boolean;
                        user_id: number;
                        service_id: number;
                        location_id: number;
                        minecraft_mode: boolean;
                        ip: string;
                        ipv6: string;
                        port: number;
                        query_port: number;
                        rcon_port: number;
                        label: string;
                        type: string;
                        memory: string;
                        memory_mb: number;
                        game: string;
                        game_human: string;
                        game_specific: Record<string, unknown>;
                        modpacks: Record<string, unknown>;
                        slots: number;
                        location: string;
                        credentials: Record<
                            string,
                            {
                                hostname: string;
                                port: number;
                                username: string;
                                password: string;
                            }
                        >;
                        settings: Record<string, unknown>;
                        quota: Record<string, unknown>;
                        query: Record<string, unknown>;
                    };
                };
            };
        }>;
    }>;
    '/services/{id}/gameservers/restart': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Server will be restarted now.';
                };
            },
            { message?: string; restart_message?: string }
        >;
    }>;
    '/services/{id}/gameservers/stop': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Server will be stopped now.';
                };
            },
            { message?: string; stop_message?: string }
        >;
    }>;
    '/services/{id}/gameservers/backups': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    backups: {
                        gameserver: Record<
                            string,
                            Array<{
                                backup_type: string;
                                backup_timestamp: number;
                                backup_number: number;
                                backup_size: number;
                                backup_file_size: number;
                            }>
                        >;
                        database: Record<
                            string,
                            Array<{
                                backup_file: string;
                                backup_size: number;
                                backup_timestamp: number;
                            }>
                        >;
                    };
                };
            };
        }>;
    }>;
    '/services/{id}/gameservers/app_server/command': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Command successful send to the application server';
                };
            },
            { command: string }
        >;
    }>;
    '/services/{id}/gameservers/app_server': URL<{
        get: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Application server pinged';
                };
            },
            { command: string }
        >;
    }>;
    '/services/{id}/gameservers/backups/database': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: 'Database backup will be restored.';
                };
            },
            { database: string; timestamp: string }
        >;
    }>;
    '/services/{id}/gameservers/backups/gameserver': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: 'Game server backup will be restored.';
                };
            },
            { folder: string; backup: string }
        >;
    }>;
    '/services/{id}/gameservers/ftp/password': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'The ftp password has been changed';
                };
            },
            { password: string }
        >;
    }>;
    '/services/{id}/gameservers/file_server/bookmarks': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    bookmarks: Array<string>;
                };
            };
        }>;
    }>;
    '/services/{id}/gameservers/file_server/copy': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'File or directory has been copied';
                };
            },
            { source_path: string; target_path: string; target_name: string }
        >;
    }>;
    '/services/{id}/gameservers/file_server/mkdir': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'The directory has created';
                };
            },
            { path: string; name: string }
        >;
    }>;
    '/services/{id}/gameservers/file_server/delete': URL<{
        delete: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'File or directory has been deleted';
                };
            },
            { path: string }
        >;
    }>;
    '/services/{id}/gameservers/file_server/download': URL<{
        get: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        token: {
                            url: string;
                            token: string;
                        };
                    };
                };
            },
            { file: string }
        >;
    }>;
    '/services/{id}/gameservers/file_server/list': URL<{
        get: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        entries: Array<{
                            type: string;
                            path: string;
                            name: string;
                            size: number;
                            owner: string;
                            group: string;
                            chmod: string;
                            created_at: number;
                            modified_at: number;
                            accessed_at?: number;
                        }>;
                    };
                };
            },
            { dir?: string; search?: string }
        >;
    }>;
    '/services/{id}/gameservers/file_server/move': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'The directory has been moved';
                };
            },
            {
                source_path: string;
                target_path: string;
                target_filename?: string;
            }
        >;
    }>;
    '/services/{id}/gameservers/file_server/seek': URL<{
        get: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        token: {
                            url: string;
                            token: string;
                        };
                    };
                };
            },
            {
                file: string;
                offset: number;
                length: number;
                mode?: 'raw' | 'lines';
            }
        >;
    }>;
    '/services/{id}/gameservers/file_server/size': URL<{
        get: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        size: number;
                    };
                };
            },
            { path: string }
        >;
    }>;
    '/services/{id}/gameservers/file_server/stat': URL<{
        get: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        entries: Array<{
                            type: string;
                            path: string;
                            name: string;
                            size: number;
                            owner: string;
                            group: string;
                            chmod: string;
                            created_at: number;
                            modified_at: number;
                            accessed_at: number;
                        }>;
                    };
                };
            },
            { files: Array<string> }
        >;
    }>;
    '/services/{id}/gameservers/file_server/upload': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        token: {
                            url: string;
                            token: string;
                        };
                    };
                };
            },
            { path: string; file: string }
        >;
    }>;
    '/gameserver/games': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    games: {
                        steam_id?: string;
                        locations: Array<{
                            id: number;
                            country: string;
                            city: string;
                        }>;
                        games: Array<{
                            id: string;
                            steam_id: number;
                            has_steam_game: string;
                            name: string;
                            minecraft_mode: boolean;
                            publicserver_only: boolean;
                            portlist_short: string;
                            folder_short: string;
                            minimum_slots: number;
                            slot_multiplier: unknown;
                            maximum_recommended_slots: number;
                            modpacks: Array<{
                                id?: number;
                                name?: string;
                                modpack_version?: string;
                                modpack_file?: string;
                                visible?: boolean;
                                game_version?: string;
                            }>;
                            icons: {
                                x256: string;
                                x120: string;
                                x64: string;
                                x32: string;
                                x16: string;
                            };
                            tags: Array<unknown>;
                            preorder_locations: Array<unknown>;
                            locations: Array<number>;
                        }>;
                    };
                };
            };
        }>;
    }>;
    '/services/{id}/gameservers/games/install': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: string;
                };
            },
            { game: string; modpack?: string }
        >;
    }>;
    '/services/{id}/gameservers/games': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    installed_currently: number;
                    installed_maximum: number;
                    hide_other_mode_games: boolean;
                    steam_id?: string;
                    locations: Array<{
                        id: number;
                        country: string;
                        city: string;
                    }>;
                    games: Array<{
                        id: string;
                        steam_id: number;
                        has_steam_game: string;
                        name: string;
                        minecraft_mode: boolean;
                        publicserver_only: boolean;
                        portlist_short: string;
                        folder_short: string;
                        minimum_slots: number;
                        slot_multiplier: unknown;
                        maximum_recommended_slots: number;
                        modpacks: Array<{
                            id?: number;
                            name?: string;
                            modpack_version?: string;
                            modpack_file?: string;
                            visible?: boolean;
                            game_version?: string;
                        }>;
                        icons: {
                            x256: string;
                            x120: string;
                            x64: string;
                            x32: string;
                            x16: string;
                        };
                        installed: boolean;
                        active: boolean;
                        enough_slots: boolean;
                        tags: Array<unknown>;
                        preorder_locations: Array<unknown>;
                        locations: Array<number>;
                    }>;
                };
            };
        }>;
    }>;
}
