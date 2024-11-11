"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Wind, Timer, Settings, Activity } from "lucide-react";
import DashboardImg from "@/components/ui/dashboard";

const Home = () => {
  const [activeDevice, setActiveDevice] = useState("정수기");

  // 샘플 사용량 데이터
  const usageData = [
    { name: "1월", 정수기: 400, 공기청정기: 240, 비데: 180 },
    { name: "2월", 정수기: 300, 공기청정기: 320, 비데: 190 },
    { name: "3월", 정수기: 450, 공기청정기: 280, 비데: 170 },
    { name: "4월", 정수기: 380, 공기청정기: 290, 비데: 200 },
  ];

  return (
    <div className="max-w-6xl p-4 mx-auto space-y-6">
      <h1 className="mb-6 text-2xl font-bold">Wells 스마트홈 대시보드</h1>

      {/* 디바이스 상태 카드 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <Droplets className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-sm font-medium">정수기</p>
                <p className="text-2xl font-bold">23°C</p>
                <p className="text-sm text-gray-500">필터 상태: 85%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <Wind className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-sm font-medium">공기청정기</p>
                <p className="text-2xl font-bold">좋음</p>
                <p className="text-sm text-gray-500">미세먼지: 12㎍/㎥</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <Settings className="w-8 h-8 text-purple-500" />
              <div>
                <p className="text-sm font-medium">비데</p>
                <p className="text-2xl font-bold">대기</p>
                <p className="text-sm text-gray-500">UV 살균: 활성화</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>월간 사용량 분석</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <DashboardImg />
          </div>
        </CardContent>
      </Card>

      {/* 알림 센터 */}
      <Card>
        <CardHeader>
          <CardTitle>실시간 알림</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center p-2 space-x-4 rounded bg-gray-50">
              <Activity className="w-5 h-5 text-red-500" />
              <div>
                <p className="font-medium">정수기 필터 교체 예정</p>
                <p className="text-sm text-gray-500">
                  2주 후 교체가 필요합니다
                </p>
              </div>
            </div>
            <div className="flex items-center p-2 space-x-4 rounded bg-gray-50">
              <Timer className="w-5 h-5 text-yellow-500" />
              <div>
                <p className="font-medium">공기청정기 필터 청소</p>
                <p className="text-sm text-gray-500">
                  마지막 청소 후 2주가 경과했습니다
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
